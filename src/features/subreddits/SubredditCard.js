import React from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "../search/searchSlice";

// https://api.dicebear.com/8.x/pixel-art/svg?seed=${display_name}
// https://robohash.org/${display_name}.png?size=25x25

export const SubredditCard = (props) => {
  const { display_name_prefixed, display_name, icon_img } = props.itemData;
  const dispatch = useDispatch();

  return (
  <div className='subredd-item' onClick={() => dispatch(setUrl(display_name_prefixed))} >
    <img src={
        icon_img ||
        `https://api.dicebear.com/8.x/pixel-art/svg?seed=${display_name}`
      }
      alt={`${display_name}`}
      className='subredd-icon'
      loading='lazy'
    />
    {display_name_prefixed}
  </div>
)}
