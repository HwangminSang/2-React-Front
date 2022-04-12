import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import GeneralAccountLedgerGrid from "./GeneralAccountLedgerGrid";
import GeneralAccountLedgerMenu from "./GeneralAccountLedgerMenu";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../reducer/AccountReducer"; 
const GeneralAccountLedger = () => {
  const [generalAccountLedgerGrid, setGeneralAccountLedgerGrid] = useState("");
  const generalAccountLedgerList = useSelector(
    ({ AccReducer }) => AccReducer.AccountReducer.generalAccountLedgerList,
  );
  const dispatch = useDispatch();
 
  const searchGeneralAccountLedgerStart = ({startDate,endDate})=>{
  console.log(`GeneralAccountLedgerMenu => GeneralAccountLedger => selectGeneralAccountLedgerStart액션 디스패치`)
  dispatch(types.selectGeneralAccountLedgerStart({startDate,endDate}));
  }

  return (
    <>
      <Typography variant="h3" gutterBottom>
        총계정원장
      </Typography>
      <GeneralAccountLedgerMenu
        generalAccountLedgerGrid={generalAccountLedgerGrid}
        generalAccountLedgerList={generalAccountLedgerList}
    
        searchGeneralAccountLedgerStart={searchGeneralAccountLedgerStart}
      />
      <GeneralAccountLedgerGrid
        setGeneralAccountLedgerGrid={setGeneralAccountLedgerGrid}
        generalAccountLedgerList={generalAccountLedgerList}
      />
    </>
  );
};

export default GeneralAccountLedger;
