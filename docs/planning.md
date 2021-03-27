---
created on: 2021-03-26
last edited: 2021-03-2
author: PrettyKenobi
status: in progress
title: The Plan
---

## Repo Layout

```
InteractiveTimeline/
├─ docs/
│  └─ (Documentation)
├─ pages/
└─ src/
   ├━ (Component definitions)
   └━ (Component tests) 
```

## Pages

* Welcome
  * `About` blurb
  * Load a timeline project
  * Start a timeline project
    * Title
    * Axis orientation
* Timeline
  * Add thread
    * (Individual timeline)
    * Title
    * Description
  * Add event
    * Title
    * Summary
    * Description

## Components

### Welcome

* `About` blurb
* `Load timeline` button
  * Actions
    * Load a timeline project
* `New timeline` button
  * Actions
    * Create a timeline project

### Timeline

* Canvas
  * Actions
    * Zoom in/out
    * Scroll threads
    * Add thread
    * Add event
    * Edit thread details
    * Edit event details
  * Props
    * `view.height`
    * `view.width`
    * `ticks.interval`
  * Contains Components
    * Thread
      * Actions
        * Edit `color`
        * Edit `title`
        * Edit `summary`
        * Edit `description`
        * Edit `orientation`
        * Edit `range`
      * Props
        * `title`
        * `color`
        * `summary`
        * `description`
        * `orientation`
          * Whether to display it vertical or horizontal
        * `range`
          * What dates does it begin and end on
      * Contains Components
        * Event
          * Actions
            * Edit `title`
            * Edit `color`
            * Edit `summary`
            * Edit `description`
            * Edit `range`
          * Props
            * `title`
            * `color`
            * `summary`
            * `description`
            * `range`
              * Could just be something like `March 2`
* Toolbar
  * Actions
    * Add thread
    * Add event
    * Save project
      * Local, in-app copy or the file system
* Inspector
  * Actions
    * Display details for threads or events
    * Edit details
