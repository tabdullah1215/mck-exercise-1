# Simple Design System:

This exercise demonstrates the use of the following tools, concepts to create
a simple design system:

### Styled Components
Styled components are used in this exercise to leverage desirable features such as:
`encapsulation of design, logic and UI into one module`, `use of css with the added power of dynamic styling`,
`property functions and conditional logic`
These components are completely content-agnostic, and are decoupled from the content completely.  They receive their
content strictly by passing through properties.

### Slide Paradigm
This exercise was designed with the slide paradigm in mind.  The Slide user experience leverages the scrolling navigation feature
of the Navbar to present each view to the user in an immersive and focused way, hence the term `slide`.  Therefore,
all views have a uniform height and fit the view window without content overflow, as would be expected of a slide.

### SlideViewer and DynamicSlide
The `SlideViewer` and `DynamicSlide` components are the heart of this web app.  These 2 components are the only `smart` components 
in this project.  The SlideViewer `scaffolds` the content from the content file, and passes it through to the Slide component, 
which is a wrapper that gets `loaded` with the required design component. 
The DynamicSlide generator `loads` the needed design component on the fly as dictated by the content file.

### Content Driven Design & Content Mapping
This exercise implements a `top-down` design, where the flow starts from the `top` with the content file
and scaffolds the content `down` into the components.
The content file is NOT just a way to avoid hard-coding content inside the components, it also acts as an implicit configuration file.  
The shape and structure of the data objects inside the content file dictate the size, breadth, depth, composition and 
layout of the web site.
 
### PropTypes
Implementing proptypes is a necessary first step to ensuring a robust content mapping system.
Proptypes offers the first layer of validation to indicate that the content will properly scaffold out into the components.
Subsequent layers of validation can be integrated to check at run-time and inform the user that the content file is malformed.

### Data Definition Document (to-do)
In theory, this content-driven application would be deployed along with a data definition document.
This document would define the shape and props of the data objects which would enable a non-technical 
`superuser` to author content files and swap them out.  Effectively speaking this would enable
users to launch new sites with minimal intervention from developers and designers.

### Reusable Websites
The ultimate objective would be to create robust, intelligent design components, along with smart, 
scalable content mapping in a way that would enable re-usability of web sites not just components.


