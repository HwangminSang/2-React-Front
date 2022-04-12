import accountApi from "api/accountApi";

export const selectSlip = (action) =>
accountApi.get("/account/findRangedSlipList", {
    params: {
      startDate: action.payload.startDate,
      endDate: action.payload.endDate,
      slipStatus: action.payload.slipStatus,
    },
  });

  //delete는 data가 들어간다 . get 은 param  <황민상 > 
  export const deleteSlip = (action) => 
   accountApi.delete("/account/deleteSlip", {
    data: { slipNo: action.payload.slipNo },
  });
  
  export const updateSlip = (action) => 
  accountApi.put("/account/updateSlip", {
  
      slipType: action.payload.slipType,
      expenseReport: action.payload.expenseReport,
      slipNo: action.payload.slipNo,
      }
    );

  export const searchJournal = (action) =>
  accountApi.get("/account/findSingleJournalList", {
    params: { slipNo: action.payload.slipNo },
  });

  export const deleteJournal = (action) =>
  accountApi.get("/account/deleteJournalRow", {
    params: {
      slipNo: action.payload.slipNo,
      journalNo: action.payload.journalNo,
    },
  });

  export const saveJournal = (action) =>
  accountApi.post(
    "/account/addSlip",
    {
      slipData: action.payload.slipData,
    },
  );

  export const updateJournal = (action) =>
  accountApi.put(
    "/account/updateJournalList",
    { journalList: action.payload.journalList }
  );

  export const searchJournalDetail = (action) =>
 
  accountApi.get("/account/getJournalDetailList", {
    params: { journalNo: action.payload.journalNo },
  });
 
  export const saveJournalDetail = (action) =>
  accountApi.post(
    "/account/SaveJournalDetailList",   // 첫번쨰 url
    { SaveJournalDetailList: action.payload.SaveJournalDetailList }  // z컨텐트 타입..
  );

  export const hrAddSlip = (action) =>
  accountApi.post(
    "/account/hrAddSlip",
    { slipData: action.payload.slipData },
    { headers: { "Content-Type": "application/json" } },
  );

  export const amSlipRequest = (action) =>
  accountApi.get("/account/findRangedSlipList", {
    params: {
      startDate: action.payload.startDate,
      endDate: action.payload.endDate,
      slipStatus: action.payload.slipStatus,
    },
  });

  export const amSlipUpdate = (action) =>
  accountApi.put("/account/approveSlip", {
    approvalData: action.payload.approvalData,
  });


  export const amJournalRequest = (action) =>{

  const {slipNo}=action.payload;

  return accountApi.get(`/account/findSingleJournalList/${slipNo}`);
}

export const getJournalNo = (action) =>{
  const {journalNo}=action.payload;
  
  return accountApi.get(`/account/getJournalDetailList/${journalNo}`);
  
};
  
  export const selectGeneralAccountLedger = (action) =>
 accountApi.get("/account/findGeneralAccountLedgerList",
    {
      params : {
        fromDate:action.payload.startDate,
        toDate:action.payload.endDate
      }
    }
  );

  export const searchJournalDouble = (action) =>
  accountApi.get("/account/journalDouble", {
    params: {
      startDate: action.payload.startDate,
      endDate: action.payload.endDate,
    },
  });

  export const selectNonCurrent = (action) =>
  accountApi.post(
    "/CurrentAsset/findCurrentAssetList",
    {
      params: {
        accountCode: action.params.accountCode,
        accountName: action.params.accountName,
      },
    },
  );

  export const saveNonCurrent = (action) =>
  accountApi.post(
    "/CurrentAsset/insertCurrentAsset",
    {
      params: action.params,
    },
  );

  export const deleteNonCurrent = (action) =>
  accountApi.get(
    "/CurrentAsset/deleteCurrentAsset",
    {
      params: { assetCode: action.param.assetCode },
    },
  );