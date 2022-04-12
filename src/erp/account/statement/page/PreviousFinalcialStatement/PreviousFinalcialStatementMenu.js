//************************* 2020-11-26 전기분재무상태표 시작 최지은&노원찬 *************************
import React, { useEffect, useState } from "react";
import moment from "moment";
import SearchIcon from "@material-ui/icons/Search";
import {useDispatch } from "react-redux";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { SELECT_PREVIOUS_STATUS_REQUEST } from "../../reducer/StatementReducer";

const PreviousFinalcialStatementMenu = () => {

    let today = moment(new Date()).format("yyyy-MM-DD");
    console.log('오늘?'+today)
    const [approvalDate, setApprovalDate] = useState('2020-01-01');

    const classes = useStyles();
    const dispatch = useDispatch();


     //조회버튼 
  const SearchClick = () => {
  
    dispatch({
      type: SELECT_PREVIOUS_STATUS_REQUEST,
      params: { date: approvalDate },
    });
  };


    return (
        <>
            <div align="center">
                    <div className={classes.margin}>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            onClick={SearchClick}
                            startIcon={<SearchIcon />}>
                            전기분 재무상태 조회
                        </Button>
                    </div>
            </div>
        </>
    );
};

const useStyles = makeStyles(theme => ({
    margin: {
        "& > *": {
            margin: theme.spacing(2),
        },
    },
}));

export default PreviousFinalcialStatementMenu;
