# Scenario images

Goal: questions where the learner reads a road situation from a picture, as on the CBR exam (nearly every CBR question shows a photo, usually from the driver's seat). At HEAD on 2026-10-16, 82% of the 1,108 questions were text only, 25 had a junction diagram, and none had a scene photo.

Order of preference for a scene:
1. A real photo from Mapillary (below). Signs, markings and layout are real, so they are correct by construction.
2. Where no photo exists (mostly moving hazards: a child stepping out, a cyclist about to swerve), a storyboarded, conditioned AI image (below).
3. A top-down SVG diagram (`src/components/diagram/`) where the point is geometry or priority and the driver's view adds nothing.

Unconditioned AI images (`scripts/images/`) are only for atmosphere and vehicle parts; they cannot carry a scenario, because the prompts must forbid signs and markings and the model gets positions, distances and directions wrong (PROCESS.md "Images").

## 1. Mapillary photos

Licence: the Mapillary Terms of Use (in force 2024-02-15) s. 3(b) put other users' content under CC BY-SA, unless a dataset says otherwise (some are CC BY-NC-SA: check each image). Course content is already CC BY-SA 4.0 (`LICENSE`), so share-alike costs nothing; crops and annotations are adaptations and stay CC BY-SA. Non-commercial, so s. 12 (commercial use) doesn't apply. Not confirmed by Mapillary staff; asking their support once would settle it.

Obligations:
- Credit per image: photographer's Mapillary username, link to the image, "CC BY-SA 4.0".
- Show the Mapillary logo and link back to Mapillary for images we serve (Terms s. 11).
- Fetch only through the official API (no scraping), never try to unblur faces or plates.

Scan (`scripts/scenes/`, token `MAPILLARY_API_TOKEN` in `dev.env`; the API is free):
1. Find target objects with `/map_features` (`object_values` filter, bbox under 0.01 square degrees, so cities are tiled).
2. Fetch the images that saw each feature; drop panoramas and on-foot captures; prefer recent images facing the object.
3. Rank by how many distinct detected classes an image holds.
4. Review the shortlist by eye; keepers go into a manifest with image id, creator, licence and the question idea.

Strong for reading the road (priority, lanes, markings, speed, crossings). Weak for moving hazards: road users appear only by chance and are blurred.

## 2. Storyboarded, conditioned generation

For scenes Mapillary lacks. Draw the scene precisely as a layout (SVG: road edges, lanes, vehicles and people as boxes with direction, camera at driver's eye height), render it to an edge, depth or segmentation map, and generate with a model that follows such a map (FLUX Canny/Depth control or image-to-image editing). The layout fixes positions, counts and distances; the model paints only surfaces. Paste exact elements on afterwards (official sign images, drawn markings) rather than asking the model to paint them. Spends OpenRouter money: within the $20 image cap, with the owner's approval per plan.
