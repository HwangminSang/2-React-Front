import React, { useState } from "react";
import moment from "moment";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { makeStyles, TextField, Button } from "@material-ui/core";
import * as types from "../../reducer/StatementReducer";
import useToday from "../../../../../util/useToday";
const AccountLedgerMenu = ({ code,searchAccountTinfoRequest }) => {
 
  const [today,monthFirstDay] =useToday();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [startDate, setStartdate] = useState(monthFirstDay);
  const [endDate, setEnddate] = useState(today);

  const { accountCode } = code; //비구조 할당

  const getAccountInfo = () => {
    if (code.accountCode === "") {
      alert("계정코드를 선택해주세요.");
      return;
    } else {
      searchAccountTinfoRequest({
        startDate: moment(startDate).format("yyyy-MM-DD"),
        endDate: moment(endDate).format("yyyy-MM-DD"),
        accountCode
      });
      
  };

}

  return (
    <>
      <div Align="center">
        <div className={classes.root}>
          <TextField
            name="startDate"
            type={"date"}
            defaultValue={startDate} //defaultValue : 초기값.
            onChange={e => setStartdate(e.target.value)} // onChange : 값이 변경되면 콜백이 발생.
          />
          <TextField
            name="endDate"
            type={"date"}
            defaultValue={endDate}
            onChange={e => setEnddate(e.target.value)}
          />
          <Button
            className={classes.margin}
            variant="contained"
            color="primary"
            onClick={getAccountInfo}
            startIcon={<SearchIcon />}
          >
            조회
          </Button>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

export default AccountLedgerMenu;
