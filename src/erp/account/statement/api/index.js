import accountApi from "api/accountApi";
import Axios from "axios";


//***********************2021-03-16 송화준 ******************************
export const selectCost = (action) =>
accountApi.get("/statement/costStatement", {
    params: {
        toDate: action.params.date,
    },
});

export const searchIncomeList = (action) =>
accountApi.get("/statement/incomeStatement", {
    params: {
        toDate: action.params.date,
        },
});
///////////////월별손익계산서
export const searchMonthIncomeList = (action) =>
accountApi.get("/statement/monthincomeStatement", {
    params: {
        toDate: action.params.date,
        },
    });

export const searchTotalTrial = (action) =>
accountApi.get("/statement/getTotalTrialBalance", {
    params: {
        toDate: action.params.date,
        },
    });

export const searchFinancial = (action) =>
accountApi.get("/statement/getFinancialPosition", {
        params: {
            toDate: action.params.date,
            },
    });

export const searchCustomerList = (action) =>
accountApi.get("/basicInfo/searchCustomer", {
    params: {
        searchCondition: action.params.searchCondition,
        workplaceCode: action.params.workplaceCode,
        },
});

export const searchJournalFormList = (action) =>
accountApi.get("/account/journal", {
    params: {
        startDate: action.params.startDate,
        endDate: action.params.endDate,
        },
});

export const searchCashJournalList = (action) =>{
const startDate=action.params.fromDate
const endDate=action.params.toDate
return accountApi.get("/statement/cashJournals",{
    params : {
        startDate,
        endDate
    }
}
  
);
}
export const searchDetailTrial = (action) =>{
    const startDate=action.params.fromDate;
    const endDate=action.params.toDate;

return accountApi.get("/statement/detailTrialBalance", 
{
    params: {
        startDate,
         endDate,
        },
});

}


export const selectAccount = (action) =>
accountApi.get("/account/getAccountCode",
      {
        params: {
            accountName: action.params.accountName,
            accountCode: action.params.accountCode,
        },
    });

export const searchAccountInfo = (action) =>
accountApi.get(
    "/account/getLedgerbyAccountInfo",{
    params: {
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        accountCode: action.payload.accountCode,
      },
    });

export const searchPreviousState = (action) =>
accountApi.get(
    "/statement/financialPositions",{
        params: {
            searchDate: action.params.date,
            },
        });
        
export const selectCashFlow = (action) =>
accountApi.get(
    "/statement/cashFlowStatement", {
        params: {
            searchDate: action.params.date,
        },
    });
    