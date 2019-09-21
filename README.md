ProseMirror configuration adapted from `prosemirror-schema-basic` and `prosemirror-menu`.

This is a modified version of the `react-prosemirror-config-default` module taken from [@aeaton/react-prosemirror-config-default](https://www.npmjs.com/package/@aeaton/react-prosemirror-config-default).
The main change is associated with image upload menu button. The function was modified to upload image(s) from local drive rather then internet.

## Installation

`npm install @aeaton/react-prosemirror-config-default@git@github.com:MikeCalugaru/react-prosemirror-config-default.git --save`

You will need to add this style code (or something similar) to your project to "mask" the input tag:

```scss
#upload_image_container {
  width: 16px;
  height: 16px;
  #upload_icon_button {
    width: 16px;
    height: 16px;
    position: relative;
  }
  #image-upload {
    font-size: 17px;
    width: 36px;
    opacity: 0;
    filter: alpha(opacity=0);
    position: relative;
    top: -22px;
    left: -10px; 
  }
}
```
