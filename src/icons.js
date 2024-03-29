import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
  faAsterisk,
  faBold,
  faItalic,
  faCode,
  faSuperscript,
  faSubscript,
  faUnderline,
  faStrikethrough,
  faLink,
  faParagraph,
  faHeading,
  faQuoteLeft,
  faListOl,
  faListUl,
  faImage,
  faTable,
  faUndo,
  faRedo,
  faOutdent,
  faAngleUp
} from '@fortawesome/fontawesome-free-solid'

const UploadImageWrapper = ({ icon }) => (
  <div id='upload_image_container' >
    <FontAwesomeIcon icon={icon} id='upload_icon_button' />
    <input id='image-upload' type="file" name="upload" />
  </div>
);

export default {
  em: <FontAwesomeIcon icon={faItalic} />,
  italic: <FontAwesomeIcon icon={faItalic} />,
  strong: <FontAwesomeIcon icon={faBold} />,
  bold: <FontAwesomeIcon icon={faBold} />,
  code: <FontAwesomeIcon icon={faCode} />,
  subscript: <FontAwesomeIcon icon={faSubscript} />,
  superscript: <FontAwesomeIcon icon={faSuperscript} />,
  underline: <FontAwesomeIcon icon={faUnderline} />,
  strikethrough: <FontAwesomeIcon icon={faStrikethrough} />,
  link: <FontAwesomeIcon icon={faLink} />,
  paragraph: <FontAwesomeIcon icon={faParagraph} />,
  heading: <FontAwesomeIcon icon={faHeading} />,
  blockquote: <FontAwesomeIcon icon={faQuoteLeft} />,
  code_block: <FontAwesomeIcon icon={faCode} />,
  ordered_list: <FontAwesomeIcon icon={faListOl} />,
  bullet_list: <FontAwesomeIcon icon={faListUl} />,
  image: <UploadImageWrapper icon={faImage} />,
  table: <FontAwesomeIcon icon={faTable} />,
  footnote: <FontAwesomeIcon icon={faAsterisk} />,
  undo: <FontAwesomeIcon icon={faUndo} />,
  redo: <FontAwesomeIcon icon={faRedo} />,
  lift: <FontAwesomeIcon icon={faOutdent} />,
  join_up: <FontAwesomeIcon icon={faAngleUp} />
}
