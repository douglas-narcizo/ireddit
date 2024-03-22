import React from "react";
import { searchSelector } from "../search/searchSlice";
import { useSelector } from "react-redux";

export const CurrentThread = () => {
    const search = useSelector(searchSelector);
    return (
        <div className='current-thread'>{search.url}</div>
    );
}
