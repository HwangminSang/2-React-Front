/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import ApprovalManagerHeader from "./ApprovalManagerHeader";
import SlipGrid from "./SlipGrid";
import JournalGrid from "./JournalGrid";
import {searchAmSlipStart , updateAmSlipStart ,setJournalNoStart ,searchAmJournalStart} from '../../reducer/AccountReducer'  //액션생성함수
import { useDispatch,useSelector } from "react-redux";
const ApprovalManager = () => {
  const [flag, setFlag] = useState(false);
  const [slipNo, setSlipNo] = useState("");
  // slipNo 는 SlipGrid 컴포넌트에서 그리드 한 줄을 클릭하면
  // JournalGrid 컴포넌트에서 전표번호(slipNo)를 받아서 다시 조회 후 그리드에 표현.
  
  const slipList = useSelector(({ AccReducer }) => AccReducer.AccountReducer.slipList);
  const approvalJournalList = useSelector(({ AccReducer }) => AccReducer.AccountReducer.approvalJournalList);
  const dispatch = useDispatch();

  const handleApprovalSearchSlip=({startDate,endDate,slipStatus})=>{
  
  console.log("ApprovalManagerHeader = > ApprovalManager => searchAmSlipStart 전표 검색")

  dispatch(searchAmSlipStart({startDate,endDate,slipStatus}));
  setFlag(false);
}

const handleApprovalSlip=approvalData=>{
  
  console.log("SlipGrid = > ApprovalManager => updateAmSlipStart 전표승인 및 반려 ")
  dispatch(updateAmSlipStart({approvalData}));
  setFlag(true);
}

const searchJournal=({journalNo})=>{
  console.log("JournalGrid = > ApprovalManager => setJournalNoStart 선택한 분개찾기 ")
dispatch(setJournalNoStart({journalNo}));

}
const searchSlipNo=(slipNo)=>{
  console.log("JournalGrid = > ApprovalManager => searchAmJournalStart 받아온 전표찾기  ")

  dispatch(searchAmJournalStart({slipNo}))
}




  return (
    <>
      <Typography variant="h3" gutterBottom>
        전표승인
      </Typography>
      <ApprovalManagerHeader handleApprovalSearchSlip={handleApprovalSearchSlip} />
      <Paper>
        <div>
          <SlipGrid 
          setSlipNo={setSlipNo} 
        
          handleApprovalSlip={handleApprovalSlip} 
          slipList={slipList}/>
        </div>
        <div>
          <JournalGrid 
          slipNo={slipNo} 
          flag={flag}  
          approvalJournalList={approvalJournalList}
          searchJournal={searchJournal}
          searchSlipNo={searchSlipNo}/>
        </div>
      </Paper>
    </>
  );
};

export default ApprovalManager;
