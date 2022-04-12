import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, Button, makeStyles, Typography } from "@material-ui/core";
import * as types from "../../reducer/AccountReducer";
import moment from "moment";
import useToday from "../../../../../util/useToday";




const GeneralAccountLedgerMenu = ({generalAccountLedgerGrid,searchGeneralAccountLedgerStart,generalAccountLedgerList}) => {
  
  console.log(generalAccountLedgerList);
  const [toDay,monthFirstDay]=useToday();
  const [startDate, setStartDate] = useState(monthFirstDay);
  const [endDate, setEndDate] = useState(toDay);
  const classes = useStyles();
  const searchData = () => { 
    searchGeneralAccountLedgerStart({
       startDate: moment(startDate).format("yyyy-MM-DD"),
        endDate: moment(endDate).format("yyyy-MM-DD"),
    })
    
  };

  
const set = Array.from(new Set(generalAccountLedgerList.map(value => value.accountName)));

  const setFilteredData = value => {
    const filterComponent = generalAccountLedgerGrid.getFilterInstance(
      "accountName",
    );
    filterComponent.setModel({
      type: "contains",
      filter: value,
    });
   generalAccountLedgerGrid.onFilterChanged();
    //props.generalAccountLedgerGrid.setQuickFilter(value);
  };

  // const inputFilterData = value => {
  //   props.generalAccountLedgerGrid.setQuickFilter(value);
  // };

  return (
    <>
      <div align="center">
        <fieldset>
          <Typography variant="h5">[ 검색조건 ]</Typography>
          <div className={classes.margin}>
            <TextField
              style={{ width: "20ch" }}
              disabled={generalAccountLedgerGrid.length === 0 ? true : false}
              //required
              id="outlined-select-currency"
              //select
              label="조건내 검색"
              variant="outlined"
              name="division"
              onChange={e =>
                generalAccountLedgerGrid.setQuickFilter(e.target.value)
              }
              margin="normal"
              size="small"
            />
            <TextField
              style={{ width: "20ch" }}
              disabled={generalAccountLedgerGrid.length === 0 ? true : false}
              //required
              id="outlined-select-currency-native"
              select
              label="계정별 정렬"
              variant="outlined"
              name="division"
              onChange={e => setFilteredData(e.target.value)}
              margin="normal"
              size="small"
            >
              {/* <option value={null} key={0}>
                전체
              </option>
              {set.map((value, inedx) => {
                return (
                  <option value={value} key={inedx + 1}>
                    {value}
                  </option>
                );
              })} */}
            </TextField>
            <TextField
              name="startDate"
              type={"date"}
              defaultValue={startDate}
              onChange={e => setStartDate(e.target.value)}
            />

            <TextField
              name="endDate"
              type={"date"}
              defaultValue={endDate}
              onChange={e => setEndDate(e.target.value)}
            />

            <Button
              variant={"contained"}
              color={"primary"}
              onClick={searchData}
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

const useStyles = makeStyles(theme => ({
  margin: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

export default GeneralAccountLedgerMenu;
