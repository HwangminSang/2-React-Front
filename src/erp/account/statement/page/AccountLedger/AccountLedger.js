import React, { useState } from "react";
import AccountLedgerGrid from "./AccountLedgerGrid";
import AccountSearch from "./AccountSearch";
import {
  Paper,
  Typography,
  Grid,
  makeStyles,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import AccountLedgerMenu from "./AccountLedgerMenu";
import { useSelector,useDispatch } from "react-redux";
import {selectAccountTinfoRequest} from '../../reducer/StatementReducer';
//import useStyles from "erp/account/statement/page/AccountLedger/Theme";

//========================================= 2020-08-25 계정별원장 조편백 ==============================================
const AccountLedger = () => {

  const LedgerByAccountList  = useSelector(({AccReducer}) => AccReducer.StatementReducer.LedgerByAccountList);
  const  isLoading = useSelector(({AccReducer}) => AccReducer.StatementReducer.isLoading); // 그리드뿌릴때 쓸 LOADING....
  const [code, setAccountCode] = useState({ accountCode: ""});
  const dispatch=useDispatch();
  const classes = useStyles();

const searchAccountTinfoRequest=({startDate,endDate,accountCode})=>{
  console.log(`AccountLedgerMenu =>AccountLedger => selectAccountTinfoRequest 액션시작`)
  
  dispatch(selectAccountTinfoRequest({startDate,endDate,accountCode}));
}

  return (
    <>
      <Typography variant="h3" gutterBottom>
        계정별 원장
      </Typography>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid item xs={4} alignItems="stretch">
          <Paper elevation={3} className={classes.paper}>
            <AppBar color="primary" position="static">
              <Toolbar>
                <Typography variant="h4">계정찾기</Typography>
              </Toolbar>
            </AppBar>
            <AccountSearch setAccountCode={setAccountCode} />
          </Paper>
        </Grid>
        <Grid item xs={8} alignItems="stretch">
          <Paper elevation={3} className={classes.paper}>
            <AppBar color="primary" position="static">
              <Toolbar>
                <Typography variant="h4">계정별 원장 출력기간</Typography>
              </Toolbar>
            </AppBar>
            <AccountLedgerMenu code={code} searchAccountTinfoRequest={searchAccountTinfoRequest}/>
            <AccountLedgerGrid LedgerByAccountList={LedgerByAccountList} isLoading={isLoading} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles({
  paper: {
    width: "100%",
    minHeight: "100vh",
  },
  card: {
    backgroundColor: "blue",
  },
});

export default AccountLedger;
