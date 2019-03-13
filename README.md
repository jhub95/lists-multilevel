# This React recursive collapsible < List > generator uses the following packages:
## @material-ui/core
## shortid
## react-router-dom

I needed to develop a way to use Material UI's < List > component in a recursive manner (lists within lists). It was made with a navigation menu in mind (therefore using react-router-dom) but could be used for other list purposes.

It is built on create-react-app. To see a demo clone this repo, do a npm install, and then npm run start.

Something to keep in mind when making multi-level depth components is that each repeatable element will need a unique id. When processing a single level array or object it's common to use the index as an id. But when it's multi-level it's very likely that your indeces will not be unique. That is why I chose to include an id as a property of each list item. I used shortid to generate unique ids.
