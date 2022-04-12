import React from "react";
import { Typography } from "@material-ui/core";
import JournalFormGrid from "./JournalFormGrid";
import JournalFormMenu from "./JournalFormMenu";
import * as types from "../../reducer/AccountReducer";
import { useDispatch,useSelector } from "react-redux";
const JournalForm = () => {
  const dispatch = useDispatch();
  const journalDoubleList = useSelector(({ AccReducer }) => AccReducer.AccountReducer.journalDoubleList);
  const { isLoading } = useSelector(state => state.AccReducer);
  const searchDataJournalDoubleStart= ({startDate,endDate})=>{

  console.log(`JournalFormMenu ==> JournalFormMenu ===> 분개장 조회(searchJournalDoubleStart)액션`)
  dispatch(types.searchJournalDoubleStart({startDate,endDate}));

}

  return (
    <>
      <Typography variant="h3" gutterBottom>
        분개장
      </Typography>
      <JournalFormMenu searchDataJournalDoubleStart={searchDataJournalDoubleStart} />
      <JournalFormGrid journalDoubleList={journalDoubleList} isLoading={isLoading} />
    </>
  );
};

export default JournalForm;
