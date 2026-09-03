/*
  INTEGRO — política única dos ciclos financeiros.

  Transição de 2026:
  - O ciclo que já estava em andamento permanece 09/08/2026 a 08/09/2026.
  - 09 e 10/09 são reservados à virada/fechamento e não abrem outro ciclo.
  - A partir de 11/09/2026, cada ciclo vai do dia 11 ao dia 10 seguinte.
*/
(function (root) {
  if (root.INTEGRO_FINANCE_CYCLE_POLICY) return;

  const TIME_ZONE = "America/Manaus";
  const NEW_CYCLE_DAY = 11;
  const TRANSITION_ACTIVE_START = "2026-08-09";
  const TRANSITION_LOOKUP_END = "2026-09-10";
  const TRANSITION_CYCLE_END = "2026-09-08";

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function isoFromParts(year, month, day) {
    return `${year}-${pad2(month)}-${pad2(day)}`;
  }

  function normalizeUtcDate(year, monthIndex, day) {
    const date = new Date(Date.UTC(year, monthIndex, day));
    return {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth() + 1,
      day: date.getUTCDate(),
    };
  }

  function datePartsInManaus(reference) {
    if (typeof reference === "string" && /^\d{4}-\d{2}-\d{2}/.test(reference)) {
      const [year, month, day] = reference.slice(0, 10).split("-").map(Number);
      return { year, month, day };
    }

    const date = reference instanceof Date ? reference : new Date(reference || Date.now());
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(date);
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

    return {
      year: Number(values.year),
      month: Number(values.month),
      day: Number(values.day),
    };
  }

  function referenceISO(reference) {
    const parts = datePartsInManaus(reference);
    return isoFromParts(parts.year, parts.month, parts.day);
  }

  function getCurrentCycleRange(reference = new Date()) {
    const refISO = referenceISO(reference);

    if (refISO >= TRANSITION_ACTIVE_START && refISO <= TRANSITION_LOOKUP_END) {
      return Object.freeze({
        startISO: TRANSITION_ACTIVE_START,
        endISO: TRANSITION_CYCLE_END,
        cycleKey: "2026-08",
        start: TRANSITION_ACTIVE_START,
        end: TRANSITION_CYCLE_END,
        key: "2026-08",
        isTransitionCycle: true,
        isClosingWindow: refISO > TRANSITION_CYCLE_END,
      });
    }

    const ref = datePartsInManaus(reference);
    let startYear = ref.year;
    let startMonthIndex = ref.month - 1;

    if (ref.day < NEW_CYCLE_DAY) startMonthIndex -= 1;

    const start = normalizeUtcDate(startYear, startMonthIndex, NEW_CYCLE_DAY);
    const nextStart = normalizeUtcDate(start.year, start.month, NEW_CYCLE_DAY);
    const end = normalizeUtcDate(nextStart.year, nextStart.month - 1, nextStart.day - 1);
    const startISO = isoFromParts(start.year, start.month, start.day);
    const endISO = isoFromParts(end.year, end.month, end.day);
    const cycleKey = startISO.slice(0, 7);

    return Object.freeze({
      startISO,
      endISO,
      cycleKey,
      start: startISO,
      end: endISO,
      key: cycleKey,
      isTransitionCycle: false,
      isClosingWindow: false,
    });
  }

  root.INTEGRO_FINANCE_CYCLE_POLICY = Object.freeze({
    TIME_ZONE,
    NEW_CYCLE_DAY,
    TRANSITION_ACTIVE_START,
    TRANSITION_CYCLE_END,
    TRANSITION_LOOKUP_END,
    getCurrentCycleRange,
    referenceISO,
  });
})(window);
