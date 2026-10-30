# One-shot room departure

An administrator can insert an exact user/room request in the private
`box_room_departures` table. The table and helper functions have no browser-role
permissions. No names or account identifiers are included in peer responses.

The default animation lasts 30 seconds. It begins only when the selected user's
updated Egg renderer acknowledges `departure_client: 1`. Existing clients cannot
render this new effect and must refresh first. The pending request expires after
30 minutes; it is not an ongoing inactivity policy or an account ban. An updated
page resumes only a matching, still-open room with an explicitly pending request.

The response supplies a server clock and a fixed deadline. The avatar, its
vehicle, attached cosmetics, label and following companion fade together.
Materials are cloned for affected objects so shared scenery and other players
retain their appearance. The server expires presence at the deadline even if
another room member triggers the next sync. If an affected player owns the room,
ownership moves to a remaining active member; an empty room closes. No currency,
inventory, game save or permanent block is changed. Rejoining does not replay a
completed request. Expired membership rows are retained until the normal room
cleanup runs; an expired heartbeat cannot restore presence.

Validation covers real Three actors/materials without GPU drawing, clock
boundaries, replay, legacy clients, room permissions, owner handover, and return
after completion. GPU visual QA is unavailable in the current cloud browser
because WebGL context creation is disabled.
