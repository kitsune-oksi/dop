import React from 'react';
import {DataStateType} from "../../data/dataState";
import {useParams} from "react-router-dom";
import {Content} from "../Content";

export const Page = (props: DataStateType) => {
    const params = useParams()
    return (
        <div>
            <Content page={props.pages[Number(params.id)]}/>
        </div>
    );
};

