import React, { useState } from "react";
import moment from "moment";
import useStyles from "./Theme";
import SearchIcon from "@material-ui/icons/Search";
import { Button, TextField, Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateRangeIcon from "@material-ui/icons/DateRange";

const SlipFormMenu = ({setVisibleState,handleSearchSlip}) => { //객체 비구조화 할당으로 명확하게 어떤 메서드인지 표시해주기.
  let year = moment(new Date()).format("yyyy");
  let month = moment(new Date()).format("MM");
  //let date = moment(new Date()).format("DD");
  let toDay = moment(new Date()).format("yyyy-MM-DD");
  let monthFirstDay = year + "-" + month + "-01";
  const yearFirst = year + "-01-01";
  const yearLast = year + "-12-31";
  console.log("yearFirst", typeof yearFirst);

  const theme = useStyles();
 
  const [slipStatus, setSlipStatus] = useState("전체");
  const [startDate, setStartDate] = useState(monthFirstDay); //시작 날짜
  const [endDate, setEndDate] = useState(toDay);

  const selectBtn = () => {
   
    handleSearchSlip(startDate,endDate,slipStatus)  // 액션생성함수를 최상단 cotainer에서  가져와서 사용.<민상>

    setVisibleState(true); //분개추가 버튼 비활성화
  };

  return (
    <>
      <div Align="center">
        <fieldset>
          <Typography variant="h5">[ 검색조건 ]</Typography>
          <div className={theme.margin}>
            <TextField
              id="startDate"
              type={"date"}  // 날짜선택가능
              value={startDate}
              defaultValue={monthFirstDay}
              onChange={e => {
                setStartDate(e.target.value);
              }}
            />
            <TextField
              id="endDate"
              type={"date"}
              value={endDate}
              defaultValue={toDay}
              onChange={e => {
                setEndDate(e.target.value);
              }}
            />
            <FormControl className={theme.formControl}>
              <InputLabel id="demo-simple-select-required-label"></InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={slipStatus}
                defaultValue={slipStatus}
                onChange={e => {
                  setSlipStatus(e.target.value);
                }}
              >
                <MenuItem value={"전체"}>전체</MenuItem>
                <MenuItem value={"미결"}>미결</MenuItem>
                <MenuItem value={"반려"}>반려</MenuItem>
                <MenuItem value={"승인"}>승인</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={ ()=> {  // 기존 event 객체 받아오던것을 없앰 < 민상 > 
                setStartDate(yearFirst);
                setEndDate(yearLast);
              }}
              startIcon={<DateRangeIcon />}
            >
              올해
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={selectBtn}
              startIcon={<SearchIcon />}
            >
              조회
            </Button>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default SlipFormMenu;
