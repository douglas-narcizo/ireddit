import React from "react";
import { useDispatch } from "react-redux";
import { toggleHiding } from "../subreddits/subredditsSlice";
import { menuIcon } from '../../common/assets';
import './MenuButton.css';

export const MenuButton = () => {
    const dispatch = useDispatch();

    return (
    <div className='menu-button' onClick={() => dispatch(toggleHiding())}>
        {menuIcon}
    </div>
)}