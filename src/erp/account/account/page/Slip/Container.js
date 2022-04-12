import React, { useState } from 'react';
import { connect ,useDispatch} from 'react-redux';
import Combine from './Combine';

import {
    selectSlipStart,
    deleteSlipStart,
    saveJournalStart,
    updateSlipStart, //전표
    selectJournalStart,
    deleteJournalStart,
    updateJournalStart, //분개
    searchJournalDetailStart,
    saveJournalDetailStart //분개상세
} from '../../reducer/AccountReducer';
import { closeSalaryWithSlipRequest } from 'erp/hr/salary/saga/CloseSalarySaga'; //임금 2020-11-19 박미노
import { deliveryDivisionStart } from 'erp/logistic/sales/action/SalesAction'; //납품 2021-06-22 PGW
import { orderDivisionStart } from 'erp/logistic/sales/action/SalesAction'; //발주 2021-06-22 PGW
//=================================================== 2020-09-10 조편백 일반전표 컨테이너 =========================================
const Container = ({

    slipFormList,
    journalList,
    journalDetailList,
    closeSalaryWithSlipRequest,
    deliveryDivisionStart,
    orderDivisionStart,
    error
}) => {
    const [visibleState, setVisibleState] = useState(true); //분개추가버튼 활성화 비활성화
    const [silpRow, setSilpRow] = useState(); //선택한 전표그리드 Row
  
    const dispatch = useDispatch();
    //=============================전표==========================
    const handleSearchSlip = (startDate, endDate, slipStatus) => {
         console.log("컨테이너 -> 전표조회 ");
         dispatch( selectSlipStart({ startDate,endDate, slipStatus }));
    };
    const handleDeleteSlip = slipNo => {
        console.log("컨테이너 -> 전표삭제 " + slipNo);
        dispatch(deleteSlipStart({slipNo}));
    };
    const handleUpdateSlip = ({slipType, expenseReport, slipNo}) => {
        console.log("컨테이너  -> 전표 update " + slipType, expenseReport, slipNo)
        dispatch(updateSlipStart({slipType,expenseReport,slipNo}));
    };
    //=============================분개==========================
    const handleSearchJournal = slipNo => {
        console.log("컨테이너 -> 분개 " + slipNo);
        dispatch(selectJournalStart({ slipNo }));
    };
    const handleDeleteJournal = (slipNo, journalNo) => {
        // console.log("컨테이너  -> 분개 삭제" + slipNo, journalNo)
        deleteJournalStart({ slipNo: slipNo, journalNo: journalNo });
    };
    const handleSaveJournal = slipData => {
        console.log('컨테이너 -> 분개저장 insert ', slipData);
        dispatch(saveJournalStart({ slipData: slipData }));
    };
    const handleUpdateJournal = journalList => {
        console.log('컨테이너  -> 분개 저장 update' + JSON.stringify(journalList));
        dispatch(updateJournalStart({journalList}));
    };
    //=============================분개상세==========================
    const handleSearchJournalDetail = journalNo => {
       console.log("컨테이너  -> 분개 상세" + journalNo)
      dispatch(searchJournalDetailStart({journalNo}));
    };
    const handlSaveJournalDetailList = SaveJournalDetailList => {
       console.log("컨테이너 -> 분개상세저장 ");
       dispatch(saveJournalDetailStart({SaveJournalDetailList}));
    };
    //임금 인설트 박미노===========================================================
    const handlCloseSalaryWithSlipRequest = salaryInsert => {
        console.log('salaryInsert', salaryInsert);
        closeSalaryWithSlipRequest({ empcode1: salaryInsert });
    };
    //납품 인설트 박미노===========================================================
    const handlCloseDeliveryWithStart = DeliveryInsert => {
        console.log('DeliveryInsert', DeliveryInsert);
        deliveryDivisionStart({ DeliveryInsert: DeliveryInsert });
    };
    const handlCloseOrderWithStart = OrderInsert => {
        console.log('OrderInsert', OrderInsert);
        orderDivisionStart({ OrderInsert: OrderInsert });
    };
    return (
        <div>
            <Combine
                handleSearchSlip={handleSearchSlip} //전표조회
                slipFormList={slipFormList} //전표조회 리듀서
                handleDeleteSlip={handleDeleteSlip} //전표삭제
                handleSearchJournal={handleSearchJournal} //분개조회
                journalList={journalList} //분개 조회 리듀서
                setVisibleState={setVisibleState} //버튼값담는 함수
                visibleState={visibleState} //버튼 true,false
                setSilpRow={setSilpRow} //전표List담는 함수  ( 추가,수정된 내용도있어서 또 담아줌 분개에서 유효성검사해야함 )
                silpRow={silpRow} //전표그리드에 선택한 ROW 한줄
                handleDeleteJournal={handleDeleteJournal} //분개 삭제
                handleSearchJournalDetail={handleSearchJournalDetail} //분개상세조회
                journalDetailList={journalDetailList} //분개상세 조회 리듀서
                handleUpdateSlip={handleUpdateSlip} //전표 update
                handleSaveJournal={handleSaveJournal} //분개저장 (1:N) 전표:분개1,분개2,분개3,분개4
                handlSaveJournalDetailList={handlSaveJournalDetailList}
                handleUpdateJournal={handleUpdateJournal}
                handlCloseSalaryWithSlipRequest={handlCloseSalaryWithSlipRequest}
                handlCloseDeliveryWithStart={handlCloseDeliveryWithStart}
                handlCloseOrderWithStart={handlCloseOrderWithStart}
            ></Combine>
        </div>
    );
};

//store에 있는 상태를 가져온다.
const mapStateToProps = state => {  
    
    return {
        slipFormList: state.AccReducer.AccountReducer.slipFormList,
        journalList: state.AccReducer.AccountReducer.journalList,
        error: state.AccReducer.AccountReducer.error,
        journalDetailList: state.AccReducer.AccountReducer.journalDetailList
       
    };
};
export default connect(mapStateToProps, {
    closeSalaryWithSlipRequest,
    deliveryDivisionStart,
    orderDivisionStart
})(Container);
