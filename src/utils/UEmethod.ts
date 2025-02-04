/**
 * create 2024-11-11 18:23:42 By wanghao
 * 全局方法封装
 * */
import EventBus from "@/utils/EventBus";
//使用bus调用页面方法
// EventBus.emit('queryMeetingCenterList', JSON.parse(data));
import {useMeetingCenterStore, useFriendStore} from "@/store";
import {nextTick, reactive} from "vue";
import MsgId from "@/proto/msgid_pb";
import * as Proto from "@/proto/meeting_pb.js";
import * as friend_pb from "@/proto/friend_pb.js";

// 数据转化：Uint8Array 转换为 JavaScript 字符串（FsString）
export const toFsString = (data) => {
    // 将 Uint8Array 转换为 JavaScript 字符串
    return new TextDecoder().decode(data);

    // return String.fromCharCode.apply(null, data);
};

// js 将序列化的proto 转成16进制编码
function bufferToHex(buffer) {
    let hex = "";
    for (let i = 0; i < buffer.length; i++) {
        // 将每个字节转换为16进制，并确保每个字节的16进制表示为两位
        hex += buffer[i].toString(16).padStart(2, "0");
    }
    return hex;
}

// js 将16进制编码 转成序列化的proto
function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
        throw new Error("Invalid hex string length");
    }

    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        buffer[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return buffer;
}

// js调用UE
export const jsCallUE = (id, data) => {
    try {
        // alert("调用UE里的函数");
        // console.log('================请求ue的id====================:',id);
        console.log("%c ================请求ue的id====================:", "color: #FFA500;", id);
        ue.ueobj.webreqmsg(id.toString(), bufferToHex(data)).then(() => {
            // alert('调用了UE里的函数!');
        });
    } catch (e) {
        console.error("ReferenceError: ue is not defined");
        // console.log('%cReferenceError: ue is not defined', 'font-weight: bold; font-size: 12px; color: red');
    }
};

// 提供给UE的方法
window.uemsgack = function (id, data) {

    const meetingCenterStore = useMeetingCenterStore();
    const friendStore = useFriendStore();

    // console.log('=========================ue返回的参数id====================:',id);
    console.log("%c ================ue返回的参数id====================:", "color: #52d10a;", id);
    switch (id) {
        //   返回会议信息列表
        case MsgId.S2C_GET_MEETING_CENTER_INFO_ACK:
            // data是json字符串
            // console.log('2008：',data);
            // console.log("2008返回参数:", hexToBuffer(data));
            const S2CGetMeetingCenterInfoAckData = Proto.default.S2CGetMeetingCenterInfoAck.deserializeBinary(hexToBuffer(data));
            console.log(`%c ${MsgId.S2C_GET_MEETING_CENTER_INFO_ACK}返回参数:`, "color: #52d10a;", S2CGetMeetingCenterInfoAckData.toObject());
            // 获取会议中心信息
            if (S2CGetMeetingCenterInfoAckData.toObject().errcode == 0) {
                // 获取会议列表数据
                meetingCenterStore.updateMeetingCenterInfo(S2CGetMeetingCenterInfoAckData.toObject());
            }
            break;
        // 返回今日会议信息列表
        case MsgId.S2C_GET_TODAY_MEETING_LIST_ACK:
            const S2CGetTodayMeetingListAckData = Proto.default.S2CGetTodayMeetingListAck.deserializeBinary(hexToBuffer(data));
            console.log(`%c ${MsgId.S2C_GET_TODAY_MEETING_LIST_ACK}返回参数:`, "color: #52d10a;", S2CGetTodayMeetingListAckData.toObject());
            // 获取会议中心信息
            if (S2CGetTodayMeetingListAckData.toObject().errcode == 0) {
                // 获取会议列表数据
                meetingCenterStore.updateTodayMeetingListInfo(S2CGetTodayMeetingListAckData.toObject());
            }
            break;
        // 返回开放会议信息列表
        case MsgId.S2C_GET_OPEN_MEETING_LIST_ACK:
            const S2CGetOpenMeetingListAckData = Proto.default.S2CGetOpenMeetingListAck.deserializeBinary(hexToBuffer(data));
            console.log(`%c ${MsgId.S2C_GET_OPEN_MEETING_LIST_ACK}返回参数:`, "color: #52d10a;", S2CGetOpenMeetingListAckData.toObject());
            // 获取会议中心信息
            if (S2CGetOpenMeetingListAckData.toObject().errcode == 0) {
                // 获取会议列表数据
                meetingCenterStore.updateOpenMeetingListInfo(S2CGetOpenMeetingListAckData.toObject());
            }
            break;
        // 返回免费会议信息列表
        case MsgId.S2C_GET_FREE_MEETING_LIST_ACK:
            const S2CGetFreeMeetingListAckData = Proto.default.S2CGetFreeMeetingListAck.deserializeBinary(hexToBuffer(data));
            console.log(`%c ${MsgId.S2C_GET_FREE_MEETING_LIST_ACK}返回参数:`, "color: #52d10a;", S2CGetFreeMeetingListAckData.toObject());
            // 获取会议中心信息
            if (S2CGetFreeMeetingListAckData.toObject().errcode == 0) {
                // 获取会议列表数据
                meetingCenterStore.updateFreenMeetingListInfo(S2CGetFreeMeetingListAckData.toObject());
            }
            break;
        // 返回过往会议信息列表
        case MsgId.S2C_GET_HISTORY_MEETING_LIST_ACK:
            const S2CGetHistoryMeetingListAckData = Proto.default.S2CGetHistoryMeetingListAck.deserializeBinary(hexToBuffer(data));
            console.log(`%c ${MsgId.S2C_GET_HISTORY_MEETING_LIST_ACK}返回参数:`, "color: #52d10a;", S2CGetHistoryMeetingListAckData.toObject());
            // 获取会议中心信息
            if (S2CGetHistoryMeetingListAckData.toObject().errcode == 0) {
                // 获取会议列表数据
                meetingCenterStore.updateHistoryMeetingListInfo(S2CGetHistoryMeetingListAckData.toObject());
            }
            break;
        // 返回我的会议信息列表
        case MsgId.S2C_GET_MY_MEETING_LIST_ACK:
            const S2CGetMyMeetingListAckData = Proto.default.S2CGetMyMeetingListAck.deserializeBinary(hexToBuffer(data));
            console.log(`%c ${MsgId.S2C_GET_MY_MEETING_LIST_ACK}返回参数:`, "color: #52d10a;", S2CGetMyMeetingListAckData.toObject());
            // 获取会议中心信息
            if (S2CGetMyMeetingListAckData.toObject().errcode == 0) {
                // 获取会议列表数据
                meetingCenterStore.updateMyMeetingListInfo(S2CGetMyMeetingListAckData.toObject());
            }
            break;
        // 获得服务器时间返回
        case MsgId.S2C_GETSERVERTIME_ACK:
            const S2CGetServerTimeAckData = Proto.default.S2CGetServerTimeAck.deserializeBinary(hexToBuffer(data));
            console.log(`%c ${MsgId.S2C_GETSERVERTIME_ACK}返回参数:`, "color: #52d10a;", S2CGetServerTimeAckData.toObject());
            // 获取会议中心信息
            if (S2CGetServerTimeAckData.toObject().errcode == 0) {
                // 获取会议列表数据
                meetingCenterStore.updateServerTime(S2CGetServerTimeAckData.toObject());
            }
            break;
        // 返回出席会议结果
        case MsgId.S2C_ATTEND_MEETING_ACK:
            const S2CAttendMeetingAckData = Proto.default.S2CAttendMeetingAck.deserializeBinary(hexToBuffer(data));
            console.log(`%c ${MsgId.S2C_ATTEND_MEETING_ACK}返回参数:`, "color: #52d10a;", S2CAttendMeetingAckData.toObject());
            meetingCenterStore.updateAttendMeeting(S2CAttendMeetingAckData.toObject());
            break;
        // 返回会议室信息列表
        case MsgId.S2C_GET_MEETING_ROOM_LIST_ACK:
            const S2CGetMeetingRoomListAckData = Proto.default.S2CGetMeetingRoomListAck.deserializeBinary(hexToBuffer(data));
            console.log("%c 2012返回参数:", "color: #52d10a;", S2CGetMeetingRoomListAckData.toObject());
            // 获取会议中心会议室列表数据
            if (S2CGetMeetingRoomListAckData.toObject().errcode == 0) {
                // 获取会议列表数据
                meetingCenterStore.updateMeetingRoomListInfo(S2CGetMeetingRoomListAckData.toObject());
            }
            break;
        //   返回会议信息列表
        case MsgId.S2C_GET_MEETING_LIST_ACK:
            const S2CGetMeetingListAckData = Proto.default.S2CGetMeetingListAck.deserializeBinary(hexToBuffer(data));
            console.log("%c 2002返回参数:", "color: #52d10a;", S2CGetMeetingListAckData.toObject());
            if (S2CGetMeetingListAckData.toObject().errcode == 0) {
                // 获取会议列表数据
                meetingCenterStore.updateMeetingListInfo(S2CGetMeetingListAckData.toObject());
            }
            break;
        //   返回创建会议结果
        case MsgId.S2C_CREATE_MEETING_ACK:
            const S2CCreateMeetingAckData = Proto.default.S2CCreateMeetingAck.deserializeBinary(hexToBuffer(data));
            console.log("%c 2004返回参数:", "color: #52d10a;", S2CCreateMeetingAckData.toObject());
            meetingCenterStore.updateCreateMeetingInfo(S2CCreateMeetingAckData.toObject());
            break;
        //   返回会议门票信息
        case MsgId.S2C_GET_MEETING_TICKETS_INFO_ACK:
            const S2CGetMeetingTicketsInfoAckData = Proto.default.S2CGetMeetingTicketsInfoAck.deserializeBinary(hexToBuffer(data));
            console.log("%c 2018返回参数:", "color: #52d10a;", S2CGetMeetingTicketsInfoAckData.toObject());
            meetingCenterStore.updateMeetingTicketsListInfo(S2CGetMeetingTicketsInfoAckData.toObject());
            break;
        //   返回好友列表 1402
        case MsgId.C2S_FRIEND_LIST_REQ:
            const S2CFriendListAckData = friend_pb.default.S2CFriendListAck.deserializeBinary(hexToBuffer(data));
            console.log("%c 1402返回参数:", "color: #52d10a;", S2CFriendListAckData.toObject());
            friendStore.updateFriendListInfo(S2CFriendListAckData.toObject());
            break;
        //   返回会议可出售的坐席总数列表
        case MsgId.S2C_GET_MEETING_SEAT_INFO_ACK:
            const S2CGetMeetingSeatInfoAckData = Proto.default.S2CGetMeetingSeatInfoAck.deserializeBinary(hexToBuffer(data));
            console.log("%c 2026返回参数:", "color: #52d10a;", JSON.stringify(S2CGetMeetingSeatInfoAckData.toObject()));
            meetingCenterStore.updateMeetingSeatInfoListInfo(S2CGetMeetingSeatInfoAckData.toObject());
            break;
        //   返回购买会议门票结果
        case MsgId.S2C_BUY_MEETING_TICKETS_ACK:
            const S2CBuyMeetingTicketsAckData = Proto.default.S2CBuyMeetingTicketsAck.deserializeBinary(hexToBuffer(data));
            console.log("%c 2016返回参数:", "color: #52d10a;", JSON.stringify(S2CBuyMeetingTicketsAckData.toObject()));
            meetingCenterStore.updateMeetingTicketsInfo(S2CBuyMeetingTicketsAckData.toObject());
            break;
        default:
            console.error("未定义的返回信息");
            break;
    }
};


// 调用UE的webgetroleid方法获取角色id
export const webGetRoleId = () => {
    try {
        // alert("调用UE里的 webgetroleid 函数");
        ue.ueobj.webgetroleid().then(() => {
            // alert('调用了UE里的函数!');
        });
    } catch (e) {
        console.error("ReferenceError: ue is not defined");
        // console.log('%cReferenceError: ue is not defined', 'font-weight: bold; font-size: 12px; color: red');
    }
};


// ue返回的会议角色id
window.uesetroleid = function (id) {
    const meetingCenterStore = useMeetingCenterStore();
    console.log("%c ================ue返回的会议角色id====================:", "color: #52d10a;", id);
    meetingCenterStore.updateRoleId(id);
};


// 调用UE的webuploadfile方法获取文件路径  type 0:会议封面图片 1:会议字幕屏幕图片(左)  2:会议字幕屏幕图片(右)
export const webuploadfile = (type) => {
    const meetingCenterStore = useMeetingCenterStore();
    try {
        // alert("调用UE里的 webuploadfile 函数");
        ue.ueobj.webuploadfile(type).then(() => {
            meetingCenterStore.loading = true;
            // alert('调用了UE里的函数!');
        });
    } catch (e) {
        console.error("ReferenceError: ue is not defined");
        // console.log('%cReferenceError: ue is not defined', 'font-weight: bold; font-size: 12px; color: red');
    }
};

let imageUrl = 'https://oss.test.kuailaiyuanyuzhou.com/';//配置服务器图片地址
// ue返回的上传图片信息
window.uploadImage = function (error, errorData, data, name, requestid = '1') {
    const meetingCenterStore = useMeetingCenterStore();
    console.log("%c ================ue返回的图片上传信息====================:", "color: #52d10a;", error, errorData, data, name, requestid);
    console.log("%c error:", "color: #52d10a;", error);
    console.log("%c errorData:", "color: #52d10a;", errorData);
    console.log("%c data:", "color: #52d10a;", data);
    console.log("%c name:", "color: #52d10a;", name);
    console.log("%c requestid:", "color: #52d10a;", requestid);
    if (error) {
        if (data && requestid === '0') {
            // meetingCenterStore.coverImage = imageUrl + '20240730-150250_1728975865_208.png' //封面图片;
            meetingCenterStore.coverImage = imageUrl + data //封面图片;
        } else if (data && requestid === '1') {
            meetingCenterStore.displayImageA = {
                url: imageUrl + data,
                name: name,
            } //展示区图片A;
        } else if (data && requestid === '2') {
            meetingCenterStore.displayImageB = {
                url: imageUrl + data,
                name: name,
            } //展示区图片B;
        }
    } else {
        console.log('上传失败信息：', errorData);
    }
    meetingCenterStore.loading = false;
};


// 调用UE的webgetaccountinfo方法获取用户信息
export const webgetaccountinfo = () => {
    try {
        // alert("调用UE里的 webuploadfile 函数");
        ue.ueobj.webgetaccountinfo().then(() => {
            // alert('调用了UE里的函数!');
        });
    } catch (e) {
        console.error("ReferenceError: ue1 is not defined");
        // console.log('%cReferenceError: ue is not defined', 'font-weight: bold; font-size: 12px; color: red');
    }
};
// ue返回的角色信息
window.uesetroleInfo = function (data) {
    const meetingCenterStore = useMeetingCenterStore();
    console.log("%c ================ue返回的角色信息====================:", "color: #52d10a;", data);
    meetingCenterStore.updateRoleInfo(data);
};


// 预览功能
export const webpreviewroom = (levelname) => {
    console.log(levelname)
    try {
        ue.ueobj.webpreviewroom(levelname).then(() => {
            // alert('调用了UE里的函数!');
        });
    } catch (e) {
        console.error("ReferenceError: ue is not defined");
        // console.log('%cReferenceError: ue is not defined', 'font-weight: bold; font-size: 12px; color: red');
    }
};


// 调用UE的webattendmeeting进入会议方法
export const webattendmeeting = (meetingid) => {
    try {
        // alert("调用UE里的 webuploadfile 函数");
        ue.ueobj.webattendmeeting(meetingid).then(() => {
            // alert('调用了UE里的函数!');
        });
    } catch (e) {
        console.error("ReferenceError: ue is not defined");
        // console.log('%cReferenceError: ue is not defined', 'font-weight: bold; font-size: 12px; color: red');
    }
};

// ue返回的进入会议信息
window.ueattendmeeting = function (data) {
    const meetingCenterStore = useMeetingCenterStore();
    console.log("%c ================ue返回的进入会议信息====================:", "color: #52d10a;", data);
    meetingCenterStore.updateAttendMeeting(data);
};


// 调用UE的webcloseui退出会议方法
export const webcloseui = () => {
    try {
        // alert("调用UE里的 webuploadfile 函数");
        ue.ueobj.webcloseui().then(() => {
            // alert('调用了UE里的函数!');
        });
    } catch (e) {
        console.error("ReferenceError: ue is not defined");
        // console.log('%cReferenceError: ue is not defined', 'font-weight: bold; font-size: 12px; color: red');
    }
};
