// source: meeting.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

// var jspb = require('google-protobuf');
import * as jspb from 'google-protobuf';//后
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.C2SAddMeetingVoteReq', null, global);
goog.exportSymbol('proto.C2SAgreeMeetingInviteReq', null, global);
goog.exportSymbol('proto.C2SApplyMeetingTospeakReq', null, global);
goog.exportSymbol('proto.C2SAttendMeetingReq', null, global);
goog.exportSymbol('proto.C2SBeganToMeetingSpeakReq', null, global);
goog.exportSymbol('proto.C2SBuyMeetingTicketsReq', null, global);
goog.exportSymbol('proto.C2SCloseMeetingTospeakReq', null, global);
goog.exportSymbol('proto.C2SCreateMeetingReq', null, global);
goog.exportSymbol('proto.C2SEndMeetingReq', null, global);
goog.exportSymbol('proto.C2SExitMeetingReq', null, global);
goog.exportSymbol('proto.C2SExtendMeetingTimeReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingAttendeeListReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingBeInvitedReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingCenterInfoReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingCommentListReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingInfoReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingIoStatisticReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingListReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingRoomListReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingScoreInfoReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingSeatInfoReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingSpeakerListReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingStatisticAfterReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingStatisticBeforeReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingTicketsInfoReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingTospeakListReq', null, global);
goog.exportSymbol('proto.C2SGetMeetingVoteListReq', null, global);
goog.exportSymbol('proto.C2SMeetingAttendeeBannedReq', null, global);
goog.exportSymbol('proto.C2SMeetingChatReq', null, global);
goog.exportSymbol('proto.C2SMeetingCommentReplyReq', null, global);
goog.exportSymbol('proto.C2SMeetingCommentReq', null, global);
goog.exportSymbol('proto.C2SMeetingForScreenReq', null, global);
goog.exportSymbol('proto.C2SMeetingGiftGivingReq', null, global);
goog.exportSymbol('proto.C2SMeetingInviteReq', null, global);
goog.exportSymbol('proto.C2SMeetingScoreReq', null, global);
goog.exportSymbol('proto.C2SMeetingSetMgrReq', null, global);
goog.exportSymbol('proto.C2SMeetingVoteReq', null, global);
goog.exportSymbol('proto.C2SModifyMeetingTimeReq', null, global);
goog.exportSymbol('proto.C2SOpenMeetingTospeakReq', null, global);
goog.exportSymbol('proto.C2SPromptMeetingSpeakerReq', null, global);
goog.exportSymbol('proto.C2SRefusedMeetingInviteReq', null, global);
goog.exportSymbol('proto.C2SRefusedMeetingTospeakReq', null, global);
goog.exportSymbol('proto.C2SStartMeetingReq', null, global);
goog.exportSymbol('proto.C2SStartMeetingVoteReq', null, global);
goog.exportSymbol('proto.MsgAttendeeInfo', null, global);
goog.exportSymbol('proto.MsgMeetingAdvert', null, global);
goog.exportSymbol('proto.MsgMeetingBeInviteInfo', null, global);
goog.exportSymbol('proto.MsgMeetingCommentInfo', null, global);
goog.exportSymbol('proto.MsgMeetingCommentReplyInfo', null, global);
goog.exportSymbol('proto.MsgMeetingEarning', null, global);
goog.exportSymbol('proto.MsgMeetingInfo', null, global);
goog.exportSymbol('proto.MsgMeetingRoomInfo', null, global);
goog.exportSymbol('proto.MsgMeetingRoomTimeInfo', null, global);
goog.exportSymbol('proto.MsgMeetingSceneRule', null, global);
goog.exportSymbol('proto.MsgMeetingScoreRoleNum', null, global);
goog.exportSymbol('proto.MsgMeetingSeatRule', null, global);
goog.exportSymbol('proto.MsgMeetingSpeechRule', null, global);
goog.exportSymbol('proto.MsgMeetingSpending', null, global);
goog.exportSymbol('proto.MsgMeetingStatisticAfter', null, global);
goog.exportSymbol('proto.MsgMeetingStatisticAfter.MsgAfterUnit', null, global);
goog.exportSymbol('proto.MsgMeetingStatisticBefore', null, global);
goog.exportSymbol('proto.MsgMeetingStatisticBefore.MsgBeforeUnit', null, global);
goog.exportSymbol('proto.MsgMeetingTicketsInfo', null, global);
goog.exportSymbol('proto.MsgMeetingVoteInfo', null, global);
goog.exportSymbol('proto.MsgSpeakerInfo', null, global);
goog.exportSymbol('proto.MsgTospeakInfo', null, global);
goog.exportSymbol('proto.S2CAddMeetingVoteAck', null, global);
goog.exportSymbol('proto.S2CAgreeMeetingInviteAck', null, global);
goog.exportSymbol('proto.S2CApplyMeetingTospeakAck', null, global);
goog.exportSymbol('proto.S2CAttendMeetingAck', null, global);
goog.exportSymbol('proto.S2CBeganToMeetingSpeakAck', null, global);
goog.exportSymbol('proto.S2CBuyMeetingTicketsAck', null, global);
goog.exportSymbol('proto.S2CCloseMeetingTospeakAck', null, global);
goog.exportSymbol('proto.S2CCreateMeetingAck', null, global);
goog.exportSymbol('proto.S2CEndMeetingAck', null, global);
goog.exportSymbol('proto.S2CExitMeetingAck', null, global);
goog.exportSymbol('proto.S2CExtendMeetingTimeAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingAttendeeListAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingBeInvitedAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingCenterInfoAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingCommentListAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingInfoAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingIoStatisticAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingListAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingRoomListAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingScoreInfoAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingSeatInfoAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingSpeakerListAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingStatisticAfterAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingStatisticBeforeAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingTicketsInfoAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingTospeakListAck', null, global);
goog.exportSymbol('proto.S2CGetMeetingVoteListAck', null, global);
goog.exportSymbol('proto.S2CMeetingAttendeeBannedAck', null, global);
goog.exportSymbol('proto.S2CMeetingChatAck', null, global);
goog.exportSymbol('proto.S2CMeetingCommentAck', null, global);
goog.exportSymbol('proto.S2CMeetingCommentReplyAck', null, global);
goog.exportSymbol('proto.S2CMeetingForScreenAck', null, global);
goog.exportSymbol('proto.S2CMeetingGiftGivingAck', null, global);
goog.exportSymbol('proto.S2CMeetingInviteAck', null, global);
goog.exportSymbol('proto.S2CMeetingScoreAck', null, global);
goog.exportSymbol('proto.S2CMeetingSetMgrAck', null, global);
goog.exportSymbol('proto.S2CMeetingVoteAck', null, global);
goog.exportSymbol('proto.S2CModifyMeetingTimeAck', null, global);
goog.exportSymbol('proto.S2COpenMeetingTospeakAck', null, global);
goog.exportSymbol('proto.S2CPromptMeetingSpeakerAck', null, global);
goog.exportSymbol('proto.S2CRefusedMeetingInviteAck', null, global);
goog.exportSymbol('proto.S2CRefusedMeetingTospeakAck', null, global);
goog.exportSymbol('proto.S2CStartMeetingAck', null, global);
goog.exportSymbol('proto.S2CStartMeetingVoteAck', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingSceneRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingSceneRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingSceneRule.displayName = 'proto.MsgMeetingSceneRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingSeatRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingSeatRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingSeatRule.displayName = 'proto.MsgMeetingSeatRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingSpeechRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingSpeechRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingSpeechRule.displayName = 'proto.MsgMeetingSpeechRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingAdvert = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingAdvert, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingAdvert.displayName = 'proto.MsgMeetingAdvert';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgMeetingInfo.repeatedFields_, null);
};
goog.inherits(proto.MsgMeetingInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingInfo.displayName = 'proto.MsgMeetingInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingListReq.displayName = 'proto.C2SGetMeetingListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingListAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.S2CGetMeetingListAck.repeatedFields_, null);
};
goog.inherits(proto.S2CGetMeetingListAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingListAck.displayName = 'proto.S2CGetMeetingListAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SCreateMeetingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SCreateMeetingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SCreateMeetingReq.displayName = 'proto.C2SCreateMeetingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CCreateMeetingAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CCreateMeetingAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CCreateMeetingAck.displayName = 'proto.S2CCreateMeetingAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SAttendMeetingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SAttendMeetingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SAttendMeetingReq.displayName = 'proto.C2SAttendMeetingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CAttendMeetingAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CAttendMeetingAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CAttendMeetingAck.displayName = 'proto.S2CAttendMeetingAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingCenterInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingCenterInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingCenterInfoReq.displayName = 'proto.C2SGetMeetingCenterInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingCenterInfoAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CGetMeetingCenterInfoAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingCenterInfoAck.displayName = 'proto.S2CGetMeetingCenterInfoAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingRoomTimeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingRoomTimeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingRoomTimeInfo.displayName = 'proto.MsgMeetingRoomTimeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingRoomInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgMeetingRoomInfo.repeatedFields_, null);
};
goog.inherits(proto.MsgMeetingRoomInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingRoomInfo.displayName = 'proto.MsgMeetingRoomInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingRoomListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingRoomListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingRoomListReq.displayName = 'proto.C2SGetMeetingRoomListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingRoomListAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.S2CGetMeetingRoomListAck.repeatedFields_, null);
};
goog.inherits(proto.S2CGetMeetingRoomListAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingRoomListAck.displayName = 'proto.S2CGetMeetingRoomListAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SExitMeetingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SExitMeetingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SExitMeetingReq.displayName = 'proto.C2SExitMeetingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CExitMeetingAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CExitMeetingAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CExitMeetingAck.displayName = 'proto.S2CExitMeetingAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingTicketsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingTicketsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingTicketsInfo.displayName = 'proto.MsgMeetingTicketsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SBuyMeetingTicketsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SBuyMeetingTicketsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SBuyMeetingTicketsReq.displayName = 'proto.C2SBuyMeetingTicketsReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CBuyMeetingTicketsAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CBuyMeetingTicketsAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CBuyMeetingTicketsAck.displayName = 'proto.S2CBuyMeetingTicketsAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingTicketsInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingTicketsInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingTicketsInfoReq.displayName = 'proto.C2SGetMeetingTicketsInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingTicketsInfoAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CGetMeetingTicketsInfoAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingTicketsInfoAck.displayName = 'proto.S2CGetMeetingTicketsInfoAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingVoteInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MsgMeetingVoteInfo.repeatedFields_, null);
};
goog.inherits(proto.MsgMeetingVoteInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingVoteInfo.displayName = 'proto.MsgMeetingVoteInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingVoteListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingVoteListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingVoteListReq.displayName = 'proto.C2SGetMeetingVoteListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingVoteListAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.S2CGetMeetingVoteListAck.repeatedFields_, null);
};
goog.inherits(proto.S2CGetMeetingVoteListAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingVoteListAck.displayName = 'proto.S2CGetMeetingVoteListAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SAddMeetingVoteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SAddMeetingVoteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SAddMeetingVoteReq.displayName = 'proto.C2SAddMeetingVoteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CAddMeetingVoteAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CAddMeetingVoteAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CAddMeetingVoteAck.displayName = 'proto.S2CAddMeetingVoteAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SMeetingVoteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SMeetingVoteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SMeetingVoteReq.displayName = 'proto.C2SMeetingVoteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CMeetingVoteAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CMeetingVoteAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CMeetingVoteAck.displayName = 'proto.S2CMeetingVoteAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SMeetingChatReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SMeetingChatReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SMeetingChatReq.displayName = 'proto.C2SMeetingChatReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CMeetingChatAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CMeetingChatAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CMeetingChatAck.displayName = 'proto.S2CMeetingChatAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingSeatInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingSeatInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingSeatInfoReq.displayName = 'proto.C2SGetMeetingSeatInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingSeatInfoAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.S2CGetMeetingSeatInfoAck.repeatedFields_, null);
};
goog.inherits(proto.S2CGetMeetingSeatInfoAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingSeatInfoAck.displayName = 'proto.S2CGetMeetingSeatInfoAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SMeetingForScreenReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SMeetingForScreenReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SMeetingForScreenReq.displayName = 'proto.C2SMeetingForScreenReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CMeetingForScreenAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CMeetingForScreenAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CMeetingForScreenAck.displayName = 'proto.S2CMeetingForScreenAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SStartMeetingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SStartMeetingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SStartMeetingReq.displayName = 'proto.C2SStartMeetingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CStartMeetingAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CStartMeetingAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CStartMeetingAck.displayName = 'proto.S2CStartMeetingAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SEndMeetingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SEndMeetingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SEndMeetingReq.displayName = 'proto.C2SEndMeetingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CEndMeetingAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CEndMeetingAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CEndMeetingAck.displayName = 'proto.S2CEndMeetingAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SStartMeetingVoteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SStartMeetingVoteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SStartMeetingVoteReq.displayName = 'proto.C2SStartMeetingVoteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CStartMeetingVoteAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CStartMeetingVoteAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CStartMeetingVoteAck.displayName = 'proto.S2CStartMeetingVoteAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SMeetingSetMgrReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SMeetingSetMgrReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SMeetingSetMgrReq.displayName = 'proto.C2SMeetingSetMgrReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CMeetingSetMgrAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CMeetingSetMgrAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CMeetingSetMgrAck.displayName = 'proto.S2CMeetingSetMgrAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgTospeakInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgTospeakInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgTospeakInfo.displayName = 'proto.MsgTospeakInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingTospeakListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingTospeakListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingTospeakListReq.displayName = 'proto.C2SGetMeetingTospeakListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingTospeakListAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.S2CGetMeetingTospeakListAck.repeatedFields_, null);
};
goog.inherits(proto.S2CGetMeetingTospeakListAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingTospeakListAck.displayName = 'proto.S2CGetMeetingTospeakListAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SApplyMeetingTospeakReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SApplyMeetingTospeakReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SApplyMeetingTospeakReq.displayName = 'proto.C2SApplyMeetingTospeakReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CApplyMeetingTospeakAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CApplyMeetingTospeakAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CApplyMeetingTospeakAck.displayName = 'proto.S2CApplyMeetingTospeakAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SOpenMeetingTospeakReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SOpenMeetingTospeakReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SOpenMeetingTospeakReq.displayName = 'proto.C2SOpenMeetingTospeakReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2COpenMeetingTospeakAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2COpenMeetingTospeakAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2COpenMeetingTospeakAck.displayName = 'proto.S2COpenMeetingTospeakAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SCloseMeetingTospeakReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SCloseMeetingTospeakReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SCloseMeetingTospeakReq.displayName = 'proto.C2SCloseMeetingTospeakReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CCloseMeetingTospeakAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CCloseMeetingTospeakAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CCloseMeetingTospeakAck.displayName = 'proto.S2CCloseMeetingTospeakAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SRefusedMeetingTospeakReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SRefusedMeetingTospeakReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SRefusedMeetingTospeakReq.displayName = 'proto.C2SRefusedMeetingTospeakReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CRefusedMeetingTospeakAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CRefusedMeetingTospeakAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CRefusedMeetingTospeakAck.displayName = 'proto.S2CRefusedMeetingTospeakAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SMeetingInviteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SMeetingInviteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SMeetingInviteReq.displayName = 'proto.C2SMeetingInviteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CMeetingInviteAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CMeetingInviteAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CMeetingInviteAck.displayName = 'proto.S2CMeetingInviteAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingBeInviteInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingBeInviteInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingBeInviteInfo.displayName = 'proto.MsgMeetingBeInviteInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingBeInvitedReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingBeInvitedReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingBeInvitedReq.displayName = 'proto.C2SGetMeetingBeInvitedReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingBeInvitedAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.S2CGetMeetingBeInvitedAck.repeatedFields_, null);
};
goog.inherits(proto.S2CGetMeetingBeInvitedAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingBeInvitedAck.displayName = 'proto.S2CGetMeetingBeInvitedAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SAgreeMeetingInviteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SAgreeMeetingInviteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SAgreeMeetingInviteReq.displayName = 'proto.C2SAgreeMeetingInviteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CAgreeMeetingInviteAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CAgreeMeetingInviteAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CAgreeMeetingInviteAck.displayName = 'proto.S2CAgreeMeetingInviteAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SRefusedMeetingInviteReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SRefusedMeetingInviteReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SRefusedMeetingInviteReq.displayName = 'proto.C2SRefusedMeetingInviteReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CRefusedMeetingInviteAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CRefusedMeetingInviteAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CRefusedMeetingInviteAck.displayName = 'proto.S2CRefusedMeetingInviteAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgSpeakerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgSpeakerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgSpeakerInfo.displayName = 'proto.MsgSpeakerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingSpeakerListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingSpeakerListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingSpeakerListReq.displayName = 'proto.C2SGetMeetingSpeakerListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingSpeakerListAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.S2CGetMeetingSpeakerListAck.repeatedFields_, null);
};
goog.inherits(proto.S2CGetMeetingSpeakerListAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingSpeakerListAck.displayName = 'proto.S2CGetMeetingSpeakerListAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SBeganToMeetingSpeakReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SBeganToMeetingSpeakReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SBeganToMeetingSpeakReq.displayName = 'proto.C2SBeganToMeetingSpeakReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CBeganToMeetingSpeakAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CBeganToMeetingSpeakAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CBeganToMeetingSpeakAck.displayName = 'proto.S2CBeganToMeetingSpeakAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SPromptMeetingSpeakerReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SPromptMeetingSpeakerReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SPromptMeetingSpeakerReq.displayName = 'proto.C2SPromptMeetingSpeakerReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CPromptMeetingSpeakerAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CPromptMeetingSpeakerAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CPromptMeetingSpeakerAck.displayName = 'proto.S2CPromptMeetingSpeakerAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgAttendeeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgAttendeeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgAttendeeInfo.displayName = 'proto.MsgAttendeeInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingAttendeeListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingAttendeeListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingAttendeeListReq.displayName = 'proto.C2SGetMeetingAttendeeListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingAttendeeListAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.S2CGetMeetingAttendeeListAck.repeatedFields_, null);
};
goog.inherits(proto.S2CGetMeetingAttendeeListAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingAttendeeListAck.displayName = 'proto.S2CGetMeetingAttendeeListAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SMeetingAttendeeBannedReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SMeetingAttendeeBannedReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SMeetingAttendeeBannedReq.displayName = 'proto.C2SMeetingAttendeeBannedReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CMeetingAttendeeBannedAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CMeetingAttendeeBannedAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CMeetingAttendeeBannedAck.displayName = 'proto.S2CMeetingAttendeeBannedAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingScoreRoleNum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingScoreRoleNum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingScoreRoleNum.displayName = 'proto.MsgMeetingScoreRoleNum';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SMeetingScoreReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SMeetingScoreReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SMeetingScoreReq.displayName = 'proto.C2SMeetingScoreReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CMeetingScoreAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CMeetingScoreAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CMeetingScoreAck.displayName = 'proto.S2CMeetingScoreAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingScoreInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingScoreInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingScoreInfoReq.displayName = 'proto.C2SGetMeetingScoreInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingScoreInfoAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CGetMeetingScoreInfoAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingScoreInfoAck.displayName = 'proto.S2CGetMeetingScoreInfoAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingInfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingInfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingInfoReq.displayName = 'proto.C2SGetMeetingInfoReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingInfoAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CGetMeetingInfoAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingInfoAck.displayName = 'proto.S2CGetMeetingInfoAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SExtendMeetingTimeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SExtendMeetingTimeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SExtendMeetingTimeReq.displayName = 'proto.C2SExtendMeetingTimeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CExtendMeetingTimeAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CExtendMeetingTimeAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CExtendMeetingTimeAck.displayName = 'proto.S2CExtendMeetingTimeAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingStatisticBefore = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingStatisticBefore, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingStatisticBefore.displayName = 'proto.MsgMeetingStatisticBefore';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingStatisticBefore.MsgBeforeUnit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingStatisticBefore.MsgBeforeUnit.displayName = 'proto.MsgMeetingStatisticBefore.MsgBeforeUnit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingStatisticBeforeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingStatisticBeforeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingStatisticBeforeReq.displayName = 'proto.C2SGetMeetingStatisticBeforeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingStatisticBeforeAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CGetMeetingStatisticBeforeAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingStatisticBeforeAck.displayName = 'proto.S2CGetMeetingStatisticBeforeAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingStatisticAfter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingStatisticAfter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingStatisticAfter.displayName = 'proto.MsgMeetingStatisticAfter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingStatisticAfter.MsgAfterUnit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingStatisticAfter.MsgAfterUnit.displayName = 'proto.MsgMeetingStatisticAfter.MsgAfterUnit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingStatisticAfterReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingStatisticAfterReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingStatisticAfterReq.displayName = 'proto.C2SGetMeetingStatisticAfterReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingStatisticAfterAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CGetMeetingStatisticAfterAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingStatisticAfterAck.displayName = 'proto.S2CGetMeetingStatisticAfterAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingEarning = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingEarning, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingEarning.displayName = 'proto.MsgMeetingEarning';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingSpending = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingSpending, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingSpending.displayName = 'proto.MsgMeetingSpending';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingIoStatisticReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingIoStatisticReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingIoStatisticReq.displayName = 'proto.C2SGetMeetingIoStatisticReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingIoStatisticAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CGetMeetingIoStatisticAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingIoStatisticAck.displayName = 'proto.S2CGetMeetingIoStatisticAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SModifyMeetingTimeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SModifyMeetingTimeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SModifyMeetingTimeReq.displayName = 'proto.C2SModifyMeetingTimeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CModifyMeetingTimeAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CModifyMeetingTimeAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CModifyMeetingTimeAck.displayName = 'proto.S2CModifyMeetingTimeAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingCommentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingCommentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingCommentInfo.displayName = 'proto.MsgMeetingCommentInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgMeetingCommentReplyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgMeetingCommentReplyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgMeetingCommentReplyInfo.displayName = 'proto.MsgMeetingCommentReplyInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SGetMeetingCommentListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SGetMeetingCommentListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SGetMeetingCommentListReq.displayName = 'proto.C2SGetMeetingCommentListReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CGetMeetingCommentListAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.S2CGetMeetingCommentListAck.repeatedFields_, null);
};
goog.inherits(proto.S2CGetMeetingCommentListAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CGetMeetingCommentListAck.displayName = 'proto.S2CGetMeetingCommentListAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SMeetingCommentReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SMeetingCommentReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SMeetingCommentReq.displayName = 'proto.C2SMeetingCommentReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CMeetingCommentAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CMeetingCommentAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CMeetingCommentAck.displayName = 'proto.S2CMeetingCommentAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SMeetingCommentReplyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SMeetingCommentReplyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SMeetingCommentReplyReq.displayName = 'proto.C2SMeetingCommentReplyReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CMeetingCommentReplyAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CMeetingCommentReplyAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CMeetingCommentReplyAck.displayName = 'proto.S2CMeetingCommentReplyAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.C2SMeetingGiftGivingReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.C2SMeetingGiftGivingReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.C2SMeetingGiftGivingReq.displayName = 'proto.C2SMeetingGiftGivingReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2CMeetingGiftGivingAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2CMeetingGiftGivingAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.S2CMeetingGiftGivingAck.displayName = 'proto.S2CMeetingGiftGivingAck';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingSceneRule.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingSceneRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingSceneRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingSceneRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    isrun: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isjump: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isformalwear: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ismask: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isaudiencearealimit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isenterspeecharea: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ismeetingstartcanmove: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingSceneRule}
 */
proto.MsgMeetingSceneRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingSceneRule;
  return proto.MsgMeetingSceneRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingSceneRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingSceneRule}
 */
proto.MsgMeetingSceneRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsrun(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsjump(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsformalwear(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsmask(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsaudiencearealimit(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsenterspeecharea(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsmeetingstartcanmove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingSceneRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingSceneRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingSceneRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingSceneRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsrun();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIsjump();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsformalwear();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIsmask();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getIsaudiencearealimit();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getIsenterspeecharea();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getIsmeetingstartcanmove();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int32 isRun = 1;
 * @return {number}
 */
proto.MsgMeetingSceneRule.prototype.getIsrun = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSceneRule} returns this
 */
proto.MsgMeetingSceneRule.prototype.setIsrun = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 isJump = 2;
 * @return {number}
 */
proto.MsgMeetingSceneRule.prototype.getIsjump = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSceneRule} returns this
 */
proto.MsgMeetingSceneRule.prototype.setIsjump = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 isFormalWear = 3;
 * @return {number}
 */
proto.MsgMeetingSceneRule.prototype.getIsformalwear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSceneRule} returns this
 */
proto.MsgMeetingSceneRule.prototype.setIsformalwear = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 isMask = 4;
 * @return {number}
 */
proto.MsgMeetingSceneRule.prototype.getIsmask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSceneRule} returns this
 */
proto.MsgMeetingSceneRule.prototype.setIsmask = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 isAudienceAreaLimit = 5;
 * @return {number}
 */
proto.MsgMeetingSceneRule.prototype.getIsaudiencearealimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSceneRule} returns this
 */
proto.MsgMeetingSceneRule.prototype.setIsaudiencearealimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 isEnterSpeechArea = 6;
 * @return {number}
 */
proto.MsgMeetingSceneRule.prototype.getIsenterspeecharea = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSceneRule} returns this
 */
proto.MsgMeetingSceneRule.prototype.setIsenterspeecharea = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 isMeetingStartCanMove = 7;
 * @return {number}
 */
proto.MsgMeetingSceneRule.prototype.getIsmeetingstartcanmove = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSceneRule} returns this
 */
proto.MsgMeetingSceneRule.prototype.setIsmeetingstartcanmove = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingSeatRule.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingSeatRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingSeatRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingSeatRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    seatname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gettype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    price: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sntype: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingSeatRule}
 */
proto.MsgMeetingSeatRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingSeatRule;
  return proto.MsgMeetingSeatRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingSeatRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingSeatRule}
 */
proto.MsgMeetingSeatRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeatname(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGettype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSntype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingSeatRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingSeatRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingSeatRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingSeatRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeatname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGettype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSntype();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string seatName = 1;
 * @return {string}
 */
proto.MsgMeetingSeatRule.prototype.getSeatname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingSeatRule} returns this
 */
proto.MsgMeetingSeatRule.prototype.setSeatname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 getType = 2;
 * @return {number}
 */
proto.MsgMeetingSeatRule.prototype.getGettype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSeatRule} returns this
 */
proto.MsgMeetingSeatRule.prototype.setGettype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 price = 3;
 * @return {number}
 */
proto.MsgMeetingSeatRule.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSeatRule} returns this
 */
proto.MsgMeetingSeatRule.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 snType = 4;
 * @return {number}
 */
proto.MsgMeetingSeatRule.prototype.getSntype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSeatRule} returns this
 */
proto.MsgMeetingSeatRule.prototype.setSntype = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingSpeechRule.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingSpeechRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingSpeechRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingSpeechRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    gettype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    price: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isspeakerforscreen: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isspeakervote: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isbanspeak: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isbantalk: jspb.Message.getFieldWithDefault(msg, 6, 0),
    isbangift: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingSpeechRule}
 */
proto.MsgMeetingSpeechRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingSpeechRule;
  return proto.MsgMeetingSpeechRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingSpeechRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingSpeechRule}
 */
proto.MsgMeetingSpeechRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGettype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsspeakerforscreen(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsspeakervote(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsbanspeak(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsbantalk(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsbangift(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingSpeechRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingSpeechRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingSpeechRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingSpeechRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGettype();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsspeakerforscreen();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getIsspeakervote();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getIsbanspeak();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getIsbantalk();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getIsbangift();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int32 getType = 1;
 * @return {number}
 */
proto.MsgMeetingSpeechRule.prototype.getGettype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpeechRule} returns this
 */
proto.MsgMeetingSpeechRule.prototype.setGettype = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 price = 2;
 * @return {number}
 */
proto.MsgMeetingSpeechRule.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpeechRule} returns this
 */
proto.MsgMeetingSpeechRule.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 isSpeakerForScreen = 3;
 * @return {number}
 */
proto.MsgMeetingSpeechRule.prototype.getIsspeakerforscreen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpeechRule} returns this
 */
proto.MsgMeetingSpeechRule.prototype.setIsspeakerforscreen = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 isSpeakerVote = 4;
 * @return {number}
 */
proto.MsgMeetingSpeechRule.prototype.getIsspeakervote = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpeechRule} returns this
 */
proto.MsgMeetingSpeechRule.prototype.setIsspeakervote = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 isBanSpeak = 5;
 * @return {number}
 */
proto.MsgMeetingSpeechRule.prototype.getIsbanspeak = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpeechRule} returns this
 */
proto.MsgMeetingSpeechRule.prototype.setIsbanspeak = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 isBanTalk = 6;
 * @return {number}
 */
proto.MsgMeetingSpeechRule.prototype.getIsbantalk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpeechRule} returns this
 */
proto.MsgMeetingSpeechRule.prototype.setIsbantalk = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 isBanGift = 7;
 * @return {number}
 */
proto.MsgMeetingSpeechRule.prototype.getIsbangift = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpeechRule} returns this
 */
proto.MsgMeetingSpeechRule.prototype.setIsbangift = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingAdvert.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingAdvert.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingAdvert} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingAdvert.toObject = function(includeInstance, msg) {
  var f, obj = {
    advertid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    advertname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    adverturl: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingAdvert}
 */
proto.MsgMeetingAdvert.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingAdvert;
  return proto.MsgMeetingAdvert.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingAdvert} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingAdvert}
 */
proto.MsgMeetingAdvert.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAdvertid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdvertname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdverturl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingAdvert.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingAdvert.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingAdvert} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingAdvert.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdvertid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAdvertname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAdverturl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 advertId = 1;
 * @return {number}
 */
proto.MsgMeetingAdvert.prototype.getAdvertid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingAdvert} returns this
 */
proto.MsgMeetingAdvert.prototype.setAdvertid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string advertName = 2;
 * @return {string}
 */
proto.MsgMeetingAdvert.prototype.getAdvertname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingAdvert} returns this
 */
proto.MsgMeetingAdvert.prototype.setAdvertname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string advertUrl = 3;
 * @return {string}
 */
proto.MsgMeetingAdvert.prototype.getAdverturl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingAdvert} returns this
 */
proto.MsgMeetingAdvert.prototype.setAdverturl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgMeetingInfo.repeatedFields_ = [20,22,28];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    meetingname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    meetingintroduction: jspb.Message.getFieldWithDefault(msg, 3, ""),
    meetingspeaker: jspb.Message.getFieldWithDefault(msg, 4, ""),
    meetingguest: jspb.Message.getFieldWithDefault(msg, 5, ""),
    meetingcoverid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    endtime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    creatorroleid: jspb.Message.getFieldWithDefault(msg, 9, 0),
    meetingroomid: jspb.Message.getFieldWithDefault(msg, 10, 0),
    meetingcenterid: jspb.Message.getFieldWithDefault(msg, 11, 0),
    meetingcenterkey: jspb.Message.getFieldWithDefault(msg, 12, 0),
    scenerule: (f = msg.getScenerule()) && proto.MsgMeetingSceneRule.toObject(includeInstance, f),
    seatrulea: (f = msg.getSeatrulea()) && proto.MsgMeetingSeatRule.toObject(includeInstance, f),
    seatruleb: (f = msg.getSeatruleb()) && proto.MsgMeetingSeatRule.toObject(includeInstance, f),
    seatrulec: (f = msg.getSeatrulec()) && proto.MsgMeetingSeatRule.toObject(includeInstance, f),
    seatruled: (f = msg.getSeatruled()) && proto.MsgMeetingSeatRule.toObject(includeInstance, f),
    audiencearearule: (f = msg.getAudiencearearule()) && proto.MsgMeetingSeatRule.toObject(includeInstance, f),
    speechrule: (f = msg.getSpeechrule()) && proto.MsgMeetingSpeechRule.toObject(includeInstance, f),
    meetingspeakersidList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    meetingdetails: jspb.Message.getFieldWithDefault(msg, 21, ""),
    meetingdetailsurlList: (f = jspb.Message.getRepeatedField(msg, 22)) == null ? undefined : f,
    meetingrealstart: jspb.Message.getFieldWithDefault(msg, 23, 0),
    screentypea: jspb.Message.getFieldWithDefault(msg, 24, 0),
    screentypeb: jspb.Message.getFieldWithDefault(msg, 25, 0),
    screentypec: jspb.Message.getFieldWithDefault(msg, 26, 0),
    screentyped: jspb.Message.getFieldWithDefault(msg, 27, 0),
    advertsList: jspb.Message.toObjectList(msg.getAdvertsList(),
    proto.MsgMeetingAdvert.toObject, includeInstance),
    soldseatcount: jspb.Message.getFieldWithDefault(msg, 29, 0),
    requesterisbuyed: jspb.Message.getFieldWithDefault(msg, 30, 0),
    currentissharescreen: jspb.Message.getFieldWithDefault(msg, 31, 0),
    currentsharescreenroldid: jspb.Message.getFieldWithDefault(msg, 32, 0),
    currentvotenum: jspb.Message.getFieldWithDefault(msg, 33, 0),
    currentistospeak: jspb.Message.getFieldWithDefault(msg, 34, 0),
    currenttospeakername: jspb.Message.getFieldWithDefault(msg, 35, ""),
    requesterisenter: jspb.Message.getFieldWithDefault(msg, 36, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingInfo}
 */
proto.MsgMeetingInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingInfo;
  return proto.MsgMeetingInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingInfo}
 */
proto.MsgMeetingInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingintroduction(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingspeaker(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingguest(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMeetingcoverid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStarttime(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndtime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatorroleid(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingroomid(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingcenterid(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingcenterkey(value);
      break;
    case 13:
      var value = new proto.MsgMeetingSceneRule;
      reader.readMessage(value,proto.MsgMeetingSceneRule.deserializeBinaryFromReader);
      msg.setScenerule(value);
      break;
    case 14:
      var value = new proto.MsgMeetingSeatRule;
      reader.readMessage(value,proto.MsgMeetingSeatRule.deserializeBinaryFromReader);
      msg.setSeatrulea(value);
      break;
    case 15:
      var value = new proto.MsgMeetingSeatRule;
      reader.readMessage(value,proto.MsgMeetingSeatRule.deserializeBinaryFromReader);
      msg.setSeatruleb(value);
      break;
    case 16:
      var value = new proto.MsgMeetingSeatRule;
      reader.readMessage(value,proto.MsgMeetingSeatRule.deserializeBinaryFromReader);
      msg.setSeatrulec(value);
      break;
    case 17:
      var value = new proto.MsgMeetingSeatRule;
      reader.readMessage(value,proto.MsgMeetingSeatRule.deserializeBinaryFromReader);
      msg.setSeatruled(value);
      break;
    case 18:
      var value = new proto.MsgMeetingSeatRule;
      reader.readMessage(value,proto.MsgMeetingSeatRule.deserializeBinaryFromReader);
      msg.setAudiencearearule(value);
      break;
    case 19:
      var value = new proto.MsgMeetingSpeechRule;
      reader.readMessage(value,proto.MsgMeetingSpeechRule.deserializeBinaryFromReader);
      msg.setSpeechrule(value);
      break;
    case 20:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMeetingspeakersid(values[i]);
      }
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingdetails(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.addMeetingdetailsurl(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingrealstart(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentypea(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentypeb(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentypec(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentyped(value);
      break;
    case 28:
      var value = new proto.MsgMeetingAdvert;
      reader.readMessage(value,proto.MsgMeetingAdvert.deserializeBinaryFromReader);
      msg.addAdverts(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSoldseatcount(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequesterisbuyed(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentissharescreen(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentsharescreenroldid(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentvotenum(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentistospeak(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrenttospeakername(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequesterisenter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMeetingname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMeetingintroduction();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMeetingspeaker();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMeetingguest();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMeetingcoverid();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getEndtime();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getCreatorroleid();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getMeetingroomid();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getMeetingcenterid();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getMeetingcenterkey();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getScenerule();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.MsgMeetingSceneRule.serializeBinaryToWriter
    );
  }
  f = message.getSeatrulea();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.MsgMeetingSeatRule.serializeBinaryToWriter
    );
  }
  f = message.getSeatruleb();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.MsgMeetingSeatRule.serializeBinaryToWriter
    );
  }
  f = message.getSeatrulec();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.MsgMeetingSeatRule.serializeBinaryToWriter
    );
  }
  f = message.getSeatruled();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.MsgMeetingSeatRule.serializeBinaryToWriter
    );
  }
  f = message.getAudiencearearule();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.MsgMeetingSeatRule.serializeBinaryToWriter
    );
  }
  f = message.getSpeechrule();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.MsgMeetingSpeechRule.serializeBinaryToWriter
    );
  }
  f = message.getMeetingspeakersidList();
  if (f.length > 0) {
    writer.writePackedInt32(
      20,
      f
    );
  }
  f = message.getMeetingdetails();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getMeetingdetailsurlList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      22,
      f
    );
  }
  f = message.getMeetingrealstart();
  if (f !== 0) {
    writer.writeInt32(
      23,
      f
    );
  }
  f = message.getScreentypea();
  if (f !== 0) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = message.getScreentypeb();
  if (f !== 0) {
    writer.writeInt32(
      25,
      f
    );
  }
  f = message.getScreentypec();
  if (f !== 0) {
    writer.writeInt32(
      26,
      f
    );
  }
  f = message.getScreentyped();
  if (f !== 0) {
    writer.writeInt32(
      27,
      f
    );
  }
  f = message.getAdvertsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      28,
      f,
      proto.MsgMeetingAdvert.serializeBinaryToWriter
    );
  }
  f = message.getSoldseatcount();
  if (f !== 0) {
    writer.writeInt32(
      29,
      f
    );
  }
  f = message.getRequesterisbuyed();
  if (f !== 0) {
    writer.writeInt32(
      30,
      f
    );
  }
  f = message.getCurrentissharescreen();
  if (f !== 0) {
    writer.writeInt32(
      31,
      f
    );
  }
  f = message.getCurrentsharescreenroldid();
  if (f !== 0) {
    writer.writeInt32(
      32,
      f
    );
  }
  f = message.getCurrentvotenum();
  if (f !== 0) {
    writer.writeInt32(
      33,
      f
    );
  }
  f = message.getCurrentistospeak();
  if (f !== 0) {
    writer.writeInt32(
      34,
      f
    );
  }
  f = message.getCurrenttospeakername();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getRequesterisenter();
  if (f !== 0) {
    writer.writeInt32(
      36,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.MsgMeetingInfo.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string meetingName = 2;
 * @return {string}
 */
proto.MsgMeetingInfo.prototype.getMeetingname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string meetingIntroduction = 3;
 * @return {string}
 */
proto.MsgMeetingInfo.prototype.getMeetingintroduction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingintroduction = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string meetingSpeaker = 4;
 * @return {string}
 */
proto.MsgMeetingInfo.prototype.getMeetingspeaker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingspeaker = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string meetingGuest = 5;
 * @return {string}
 */
proto.MsgMeetingInfo.prototype.getMeetingguest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingguest = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 meetingCoverId = 6;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getMeetingcoverid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingcoverid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 startTime = 7;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 endTime = 8;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getEndtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 creatorRoleId = 9;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getCreatorroleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setCreatorroleid = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 meetingRoomId = 10;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getMeetingroomid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingroomid = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 meetingCenterId = 11;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getMeetingcenterid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingcenterid = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 meetingCenterKey = 12;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getMeetingcenterkey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingcenterkey = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional MsgMeetingSceneRule sceneRule = 13;
 * @return {?proto.MsgMeetingSceneRule}
 */
proto.MsgMeetingInfo.prototype.getScenerule = function() {
  return /** @type{?proto.MsgMeetingSceneRule} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingSceneRule, 13));
};


/**
 * @param {?proto.MsgMeetingSceneRule|undefined} value
 * @return {!proto.MsgMeetingInfo} returns this
*/
proto.MsgMeetingInfo.prototype.setScenerule = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.clearScenerule = function() {
  return this.setScenerule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingInfo.prototype.hasScenerule = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional MsgMeetingSeatRule seatRuleA = 14;
 * @return {?proto.MsgMeetingSeatRule}
 */
proto.MsgMeetingInfo.prototype.getSeatrulea = function() {
  return /** @type{?proto.MsgMeetingSeatRule} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingSeatRule, 14));
};


/**
 * @param {?proto.MsgMeetingSeatRule|undefined} value
 * @return {!proto.MsgMeetingInfo} returns this
*/
proto.MsgMeetingInfo.prototype.setSeatrulea = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.clearSeatrulea = function() {
  return this.setSeatrulea(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingInfo.prototype.hasSeatrulea = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional MsgMeetingSeatRule seatRuleB = 15;
 * @return {?proto.MsgMeetingSeatRule}
 */
proto.MsgMeetingInfo.prototype.getSeatruleb = function() {
  return /** @type{?proto.MsgMeetingSeatRule} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingSeatRule, 15));
};


/**
 * @param {?proto.MsgMeetingSeatRule|undefined} value
 * @return {!proto.MsgMeetingInfo} returns this
*/
proto.MsgMeetingInfo.prototype.setSeatruleb = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.clearSeatruleb = function() {
  return this.setSeatruleb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingInfo.prototype.hasSeatruleb = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional MsgMeetingSeatRule seatRuleC = 16;
 * @return {?proto.MsgMeetingSeatRule}
 */
proto.MsgMeetingInfo.prototype.getSeatrulec = function() {
  return /** @type{?proto.MsgMeetingSeatRule} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingSeatRule, 16));
};


/**
 * @param {?proto.MsgMeetingSeatRule|undefined} value
 * @return {!proto.MsgMeetingInfo} returns this
*/
proto.MsgMeetingInfo.prototype.setSeatrulec = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.clearSeatrulec = function() {
  return this.setSeatrulec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingInfo.prototype.hasSeatrulec = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional MsgMeetingSeatRule seatRuleD = 17;
 * @return {?proto.MsgMeetingSeatRule}
 */
proto.MsgMeetingInfo.prototype.getSeatruled = function() {
  return /** @type{?proto.MsgMeetingSeatRule} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingSeatRule, 17));
};


/**
 * @param {?proto.MsgMeetingSeatRule|undefined} value
 * @return {!proto.MsgMeetingInfo} returns this
*/
proto.MsgMeetingInfo.prototype.setSeatruled = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.clearSeatruled = function() {
  return this.setSeatruled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingInfo.prototype.hasSeatruled = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional MsgMeetingSeatRule audienceAreaRule = 18;
 * @return {?proto.MsgMeetingSeatRule}
 */
proto.MsgMeetingInfo.prototype.getAudiencearearule = function() {
  return /** @type{?proto.MsgMeetingSeatRule} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingSeatRule, 18));
};


/**
 * @param {?proto.MsgMeetingSeatRule|undefined} value
 * @return {!proto.MsgMeetingInfo} returns this
*/
proto.MsgMeetingInfo.prototype.setAudiencearearule = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.clearAudiencearearule = function() {
  return this.setAudiencearearule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingInfo.prototype.hasAudiencearearule = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional MsgMeetingSpeechRule speechRule = 19;
 * @return {?proto.MsgMeetingSpeechRule}
 */
proto.MsgMeetingInfo.prototype.getSpeechrule = function() {
  return /** @type{?proto.MsgMeetingSpeechRule} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingSpeechRule, 19));
};


/**
 * @param {?proto.MsgMeetingSpeechRule|undefined} value
 * @return {!proto.MsgMeetingInfo} returns this
*/
proto.MsgMeetingInfo.prototype.setSpeechrule = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.clearSpeechrule = function() {
  return this.setSpeechrule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingInfo.prototype.hasSpeechrule = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * repeated int32 meetingSpeakersId = 20;
 * @return {!Array<number>}
 */
proto.MsgMeetingInfo.prototype.getMeetingspeakersidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingspeakersidList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.addMeetingspeakersid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.clearMeetingspeakersidList = function() {
  return this.setMeetingspeakersidList([]);
};


/**
 * optional string meetingDetails = 21;
 * @return {string}
 */
proto.MsgMeetingInfo.prototype.getMeetingdetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingdetails = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * repeated string meetingDetailsURL = 22;
 * @return {!Array<string>}
 */
proto.MsgMeetingInfo.prototype.getMeetingdetailsurlList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 22));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingdetailsurlList = function(value) {
  return jspb.Message.setField(this, 22, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.addMeetingdetailsurl = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 22, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.clearMeetingdetailsurlList = function() {
  return this.setMeetingdetailsurlList([]);
};


/**
 * optional int32 meetingRealStart = 23;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getMeetingrealstart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setMeetingrealstart = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional int32 screenTypeA = 24;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getScreentypea = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setScreentypea = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional int32 screenTypeB = 25;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getScreentypeb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setScreentypeb = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional int32 screenTypeC = 26;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getScreentypec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setScreentypec = function(value) {
  return jspb.Message.setProto3IntField(this, 26, value);
};


/**
 * optional int32 screenTypeD = 27;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getScreentyped = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setScreentyped = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * repeated MsgMeetingAdvert adverts = 28;
 * @return {!Array<!proto.MsgMeetingAdvert>}
 */
proto.MsgMeetingInfo.prototype.getAdvertsList = function() {
  return /** @type{!Array<!proto.MsgMeetingAdvert>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgMeetingAdvert, 28));
};


/**
 * @param {!Array<!proto.MsgMeetingAdvert>} value
 * @return {!proto.MsgMeetingInfo} returns this
*/
proto.MsgMeetingInfo.prototype.setAdvertsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 28, value);
};


/**
 * @param {!proto.MsgMeetingAdvert=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingAdvert}
 */
proto.MsgMeetingInfo.prototype.addAdverts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 28, opt_value, proto.MsgMeetingAdvert, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.clearAdvertsList = function() {
  return this.setAdvertsList([]);
};


/**
 * optional int32 soldSeatCount = 29;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getSoldseatcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setSoldseatcount = function(value) {
  return jspb.Message.setProto3IntField(this, 29, value);
};


/**
 * optional int32 requesterIsBuyed = 30;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getRequesterisbuyed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setRequesterisbuyed = function(value) {
  return jspb.Message.setProto3IntField(this, 30, value);
};


/**
 * optional int32 currentIsShareScreen = 31;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getCurrentissharescreen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setCurrentissharescreen = function(value) {
  return jspb.Message.setProto3IntField(this, 31, value);
};


/**
 * optional int32 currentShareScreenRoldId = 32;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getCurrentsharescreenroldid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setCurrentsharescreenroldid = function(value) {
  return jspb.Message.setProto3IntField(this, 32, value);
};


/**
 * optional int32 currentVoteNum = 33;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getCurrentvotenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setCurrentvotenum = function(value) {
  return jspb.Message.setProto3IntField(this, 33, value);
};


/**
 * optional int32 currentIsTospeak = 34;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getCurrentistospeak = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setCurrentistospeak = function(value) {
  return jspb.Message.setProto3IntField(this, 34, value);
};


/**
 * optional string currentTospeakerName = 35;
 * @return {string}
 */
proto.MsgMeetingInfo.prototype.getCurrenttospeakername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setCurrenttospeakername = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional int32 requesterIsEnter = 36;
 * @return {number}
 */
proto.MsgMeetingInfo.prototype.getRequesterisenter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingInfo} returns this
 */
proto.MsgMeetingInfo.prototype.setRequesterisenter = function(value) {
  return jspb.Message.setProto3IntField(this, 36, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingcenterid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingcenterkey: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingListReq}
 */
proto.C2SGetMeetingListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingListReq;
  return proto.C2SGetMeetingListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingListReq}
 */
proto.C2SGetMeetingListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingcenterid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingcenterkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingcenterid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingcenterkey();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 meetingCenterId = 1;
 * @return {number}
 */
proto.C2SGetMeetingListReq.prototype.getMeetingcenterid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SGetMeetingListReq} returns this
 */
proto.C2SGetMeetingListReq.prototype.setMeetingcenterid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 meetingCenterKey = 2;
 * @return {number}
 */
proto.C2SGetMeetingListReq.prototype.getMeetingcenterkey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SGetMeetingListReq} returns this
 */
proto.C2SGetMeetingListReq.prototype.setMeetingcenterkey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.S2CGetMeetingListAck.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingListAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingListAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingListAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingListAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.MsgMeetingInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingListAck}
 */
proto.S2CGetMeetingListAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingListAck;
  return proto.S2CGetMeetingListAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingListAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingListAck}
 */
proto.S2CGetMeetingListAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgMeetingInfo;
      reader.readMessage(value,proto.MsgMeetingInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingListAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingListAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingListAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingListAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.MsgMeetingInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingListAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingListAck} returns this
 */
proto.S2CGetMeetingListAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MsgMeetingInfo infos = 2;
 * @return {!Array<!proto.MsgMeetingInfo>}
 */
proto.S2CGetMeetingListAck.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.MsgMeetingInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgMeetingInfo, 2));
};


/**
 * @param {!Array<!proto.MsgMeetingInfo>} value
 * @return {!proto.S2CGetMeetingListAck} returns this
*/
proto.S2CGetMeetingListAck.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MsgMeetingInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingInfo}
 */
proto.S2CGetMeetingListAck.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MsgMeetingInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingListAck} returns this
 */
proto.S2CGetMeetingListAck.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SCreateMeetingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SCreateMeetingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SCreateMeetingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SCreateMeetingReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.MsgMeetingInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SCreateMeetingReq}
 */
proto.C2SCreateMeetingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SCreateMeetingReq;
  return proto.C2SCreateMeetingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SCreateMeetingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SCreateMeetingReq}
 */
proto.C2SCreateMeetingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MsgMeetingInfo;
      reader.readMessage(value,proto.MsgMeetingInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SCreateMeetingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SCreateMeetingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SCreateMeetingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SCreateMeetingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MsgMeetingInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional MsgMeetingInfo info = 1;
 * @return {?proto.MsgMeetingInfo}
 */
proto.C2SCreateMeetingReq.prototype.getInfo = function() {
  return /** @type{?proto.MsgMeetingInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingInfo, 1));
};


/**
 * @param {?proto.MsgMeetingInfo|undefined} value
 * @return {!proto.C2SCreateMeetingReq} returns this
*/
proto.C2SCreateMeetingReq.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.C2SCreateMeetingReq} returns this
 */
proto.C2SCreateMeetingReq.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.C2SCreateMeetingReq.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CCreateMeetingAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CCreateMeetingAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CCreateMeetingAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CCreateMeetingAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CCreateMeetingAck}
 */
proto.S2CCreateMeetingAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CCreateMeetingAck;
  return proto.S2CCreateMeetingAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CCreateMeetingAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CCreateMeetingAck}
 */
proto.S2CCreateMeetingAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CCreateMeetingAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CCreateMeetingAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CCreateMeetingAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CCreateMeetingAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CCreateMeetingAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CCreateMeetingAck} returns this
 */
proto.S2CCreateMeetingAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SAttendMeetingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SAttendMeetingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SAttendMeetingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SAttendMeetingReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingroomid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SAttendMeetingReq}
 */
proto.C2SAttendMeetingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SAttendMeetingReq;
  return proto.C2SAttendMeetingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SAttendMeetingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SAttendMeetingReq}
 */
proto.C2SAttendMeetingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingroomid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SAttendMeetingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SAttendMeetingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SAttendMeetingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SAttendMeetingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingroomid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 meetingRoomId = 1;
 * @return {number}
 */
proto.C2SAttendMeetingReq.prototype.getMeetingroomid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SAttendMeetingReq} returns this
 */
proto.C2SAttendMeetingReq.prototype.setMeetingroomid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.C2SAttendMeetingReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SAttendMeetingReq} returns this
 */
proto.C2SAttendMeetingReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CAttendMeetingAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CAttendMeetingAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CAttendMeetingAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CAttendMeetingAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingroomsceneid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    meetingroomscenekey: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CAttendMeetingAck}
 */
proto.S2CAttendMeetingAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CAttendMeetingAck;
  return proto.S2CAttendMeetingAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CAttendMeetingAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CAttendMeetingAck}
 */
proto.S2CAttendMeetingAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingroomsceneid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingroomscenekey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CAttendMeetingAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CAttendMeetingAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CAttendMeetingAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CAttendMeetingAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingroomsceneid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMeetingroomscenekey();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CAttendMeetingAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CAttendMeetingAck} returns this
 */
proto.S2CAttendMeetingAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 meetingRoomSceneId = 2;
 * @return {number}
 */
proto.S2CAttendMeetingAck.prototype.getMeetingroomsceneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CAttendMeetingAck} returns this
 */
proto.S2CAttendMeetingAck.prototype.setMeetingroomsceneid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 meetingRoomSceneKey = 3;
 * @return {number}
 */
proto.S2CAttendMeetingAck.prototype.getMeetingroomscenekey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CAttendMeetingAck} returns this
 */
proto.S2CAttendMeetingAck.prototype.setMeetingroomscenekey = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingCenterInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingCenterInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingCenterInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingCenterInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingcenterid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingcenterkey: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingCenterInfoReq}
 */
proto.C2SGetMeetingCenterInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingCenterInfoReq;
  return proto.C2SGetMeetingCenterInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingCenterInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingCenterInfoReq}
 */
proto.C2SGetMeetingCenterInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingcenterid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingcenterkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingCenterInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingCenterInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingCenterInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingCenterInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingcenterid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingcenterkey();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 meetingCenterId = 1;
 * @return {number}
 */
proto.C2SGetMeetingCenterInfoReq.prototype.getMeetingcenterid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SGetMeetingCenterInfoReq} returns this
 */
proto.C2SGetMeetingCenterInfoReq.prototype.setMeetingcenterid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 meetingCenterKey = 2;
 * @return {number}
 */
proto.C2SGetMeetingCenterInfoReq.prototype.getMeetingcenterkey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SGetMeetingCenterInfoReq} returns this
 */
proto.C2SGetMeetingCenterInfoReq.prototype.setMeetingcenterkey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingCenterInfoAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingCenterInfoAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingCenterInfoAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingcenterid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    meetingcentername: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    duetime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    defaultmeetingroomsceneid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ownerid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    ownername: jspb.Message.getFieldWithDefault(msg, 8, ""),
    ownericon: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingCenterInfoAck}
 */
proto.S2CGetMeetingCenterInfoAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingCenterInfoAck;
  return proto.S2CGetMeetingCenterInfoAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingCenterInfoAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingCenterInfoAck}
 */
proto.S2CGetMeetingCenterInfoAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingcenterid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingcentername(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatetime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuetime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultmeetingroomsceneid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOwnerid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnername(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOwnericon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingCenterInfoAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingCenterInfoAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingCenterInfoAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingcenterid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMeetingcentername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDuetime();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDefaultmeetingroomsceneid();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getOwnerid();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getOwnername();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOwnericon();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingCenterInfoAck} returns this
 */
proto.S2CGetMeetingCenterInfoAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 meetingCenterId = 2;
 * @return {number}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.getMeetingcenterid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingCenterInfoAck} returns this
 */
proto.S2CGetMeetingCenterInfoAck.prototype.setMeetingcenterid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string meetingCenterName = 3;
 * @return {string}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.getMeetingcentername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CGetMeetingCenterInfoAck} returns this
 */
proto.S2CGetMeetingCenterInfoAck.prototype.setMeetingcentername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 createTime = 4;
 * @return {number}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingCenterInfoAck} returns this
 */
proto.S2CGetMeetingCenterInfoAck.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 dueTime = 5;
 * @return {number}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.getDuetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingCenterInfoAck} returns this
 */
proto.S2CGetMeetingCenterInfoAck.prototype.setDuetime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 defaultMeetingRoomSceneId = 6;
 * @return {number}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.getDefaultmeetingroomsceneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingCenterInfoAck} returns this
 */
proto.S2CGetMeetingCenterInfoAck.prototype.setDefaultmeetingroomsceneid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 ownerId = 7;
 * @return {number}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.getOwnerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingCenterInfoAck} returns this
 */
proto.S2CGetMeetingCenterInfoAck.prototype.setOwnerid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string ownerName = 8;
 * @return {string}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.getOwnername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CGetMeetingCenterInfoAck} returns this
 */
proto.S2CGetMeetingCenterInfoAck.prototype.setOwnername = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 ownerIcon = 9;
 * @return {number}
 */
proto.S2CGetMeetingCenterInfoAck.prototype.getOwnericon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingCenterInfoAck} returns this
 */
proto.S2CGetMeetingCenterInfoAck.prototype.setOwnericon = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingRoomTimeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingRoomTimeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingRoomTimeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingRoomTimeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    starttime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endtime: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingRoomTimeInfo}
 */
proto.MsgMeetingRoomTimeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingRoomTimeInfo;
  return proto.MsgMeetingRoomTimeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingRoomTimeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingRoomTimeInfo}
 */
proto.MsgMeetingRoomTimeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStarttime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingRoomTimeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingRoomTimeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingRoomTimeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingRoomTimeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEndtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.MsgMeetingRoomTimeInfo.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingRoomTimeInfo} returns this
 */
proto.MsgMeetingRoomTimeInfo.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 startTime = 2;
 * @return {number}
 */
proto.MsgMeetingRoomTimeInfo.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomTimeInfo} returns this
 */
proto.MsgMeetingRoomTimeInfo.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 endTime = 3;
 * @return {number}
 */
proto.MsgMeetingRoomTimeInfo.prototype.getEndtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomTimeInfo} returns this
 */
proto.MsgMeetingRoomTimeInfo.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgMeetingRoomInfo.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingRoomInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingRoomInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingRoomInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingRoomInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingroomid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingroomname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    meetingroomscreenshots: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    sitetype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    sceneid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    scenekey: jspb.Message.getFieldWithDefault(msg, 7, 0),
    price: jspb.Message.getFieldWithDefault(msg, 8, 0),
    timeinfosList: jspb.Message.toObjectList(msg.getTimeinfosList(),
    proto.MsgMeetingRoomTimeInfo.toObject, includeInstance),
    seatspeakertotalnum: jspb.Message.getFieldWithDefault(msg, 10, 0),
    seatatotalnum: jspb.Message.getFieldWithDefault(msg, 11, 0),
    seatbtotalnum: jspb.Message.getFieldWithDefault(msg, 12, 0),
    seatctotalnum: jspb.Message.getFieldWithDefault(msg, 13, 0),
    seatdtotalnum: jspb.Message.getFieldWithDefault(msg, 14, 0),
    audienceareanum: jspb.Message.getFieldWithDefault(msg, 15, 0),
    screennuma: jspb.Message.getFieldWithDefault(msg, 16, 0),
    screennumb: jspb.Message.getFieldWithDefault(msg, 17, 0),
    screennumc: jspb.Message.getFieldWithDefault(msg, 18, 0),
    screennumd: jspb.Message.getFieldWithDefault(msg, 19, 0),
    advertnum: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingRoomInfo}
 */
proto.MsgMeetingRoomInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingRoomInfo;
  return proto.MsgMeetingRoomInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingRoomInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingRoomInfo}
 */
proto.MsgMeetingRoomInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingroomid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingroomname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingroomscreenshots(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatetime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSitetype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSceneid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScenekey(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 9:
      var value = new proto.MsgMeetingRoomTimeInfo;
      reader.readMessage(value,proto.MsgMeetingRoomTimeInfo.deserializeBinaryFromReader);
      msg.addTimeinfos(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatspeakertotalnum(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatatotalnum(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatbtotalnum(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatctotalnum(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatdtotalnum(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAudienceareanum(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreennuma(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreennumb(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreennumc(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreennumd(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAdvertnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingRoomInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingRoomInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingRoomInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingRoomInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingroomid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingroomname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMeetingroomscreenshots();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getSitetype();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSceneid();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getScenekey();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getTimeinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.MsgMeetingRoomTimeInfo.serializeBinaryToWriter
    );
  }
  f = message.getSeatspeakertotalnum();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getSeatatotalnum();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getSeatbtotalnum();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getSeatctotalnum();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getSeatdtotalnum();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getAudienceareanum();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getScreennuma();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getScreennumb();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getScreennumc();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getScreennumd();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getAdvertnum();
  if (f !== 0) {
    writer.writeInt32(
      20,
      f
    );
  }
};


/**
 * optional int32 meetingRoomId = 1;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getMeetingroomid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setMeetingroomid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingRoomName = 2;
 * @return {string}
 */
proto.MsgMeetingRoomInfo.prototype.getMeetingroomname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setMeetingroomname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 meetingRoomScreenshots = 3;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getMeetingroomscreenshots = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setMeetingroomscreenshots = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 createTime = 4;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 siteType = 5;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getSitetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setSitetype = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 sceneId = 6;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getSceneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setSceneid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 sceneKey = 7;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getScenekey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setScenekey = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 price = 8;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated MsgMeetingRoomTimeInfo timeInfos = 9;
 * @return {!Array<!proto.MsgMeetingRoomTimeInfo>}
 */
proto.MsgMeetingRoomInfo.prototype.getTimeinfosList = function() {
  return /** @type{!Array<!proto.MsgMeetingRoomTimeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgMeetingRoomTimeInfo, 9));
};


/**
 * @param {!Array<!proto.MsgMeetingRoomTimeInfo>} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
*/
proto.MsgMeetingRoomInfo.prototype.setTimeinfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.MsgMeetingRoomTimeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingRoomTimeInfo}
 */
proto.MsgMeetingRoomInfo.prototype.addTimeinfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.MsgMeetingRoomTimeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.clearTimeinfosList = function() {
  return this.setTimeinfosList([]);
};


/**
 * optional int32 seatSpeakerTotalNum = 10;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getSeatspeakertotalnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setSeatspeakertotalnum = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 seatATotalNum = 11;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getSeatatotalnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setSeatatotalnum = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 seatBTotalNum = 12;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getSeatbtotalnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setSeatbtotalnum = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 seatCTotalNum = 13;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getSeatctotalnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setSeatctotalnum = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 seatDTotalNum = 14;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getSeatdtotalnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setSeatdtotalnum = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 audienceAreaNum = 15;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getAudienceareanum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setAudienceareanum = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int32 screenNumA = 16;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getScreennuma = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setScreennuma = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 screenNumB = 17;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getScreennumb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setScreennumb = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int32 screenNumC = 18;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getScreennumc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setScreennumc = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int32 screenNumD = 19;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getScreennumd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setScreennumd = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int32 advertNum = 20;
 * @return {number}
 */
proto.MsgMeetingRoomInfo.prototype.getAdvertnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingRoomInfo} returns this
 */
proto.MsgMeetingRoomInfo.prototype.setAdvertnum = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingRoomListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingRoomListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingRoomListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingRoomListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingcenterid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingcenterkey: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingRoomListReq}
 */
proto.C2SGetMeetingRoomListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingRoomListReq;
  return proto.C2SGetMeetingRoomListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingRoomListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingRoomListReq}
 */
proto.C2SGetMeetingRoomListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingcenterid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMeetingcenterkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingRoomListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingRoomListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingRoomListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingRoomListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingcenterid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingcenterkey();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 meetingCenterId = 1;
 * @return {number}
 */
proto.C2SGetMeetingRoomListReq.prototype.getMeetingcenterid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SGetMeetingRoomListReq} returns this
 */
proto.C2SGetMeetingRoomListReq.prototype.setMeetingcenterid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 meetingCenterKey = 2;
 * @return {number}
 */
proto.C2SGetMeetingRoomListReq.prototype.getMeetingcenterkey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SGetMeetingRoomListReq} returns this
 */
proto.C2SGetMeetingRoomListReq.prototype.setMeetingcenterkey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.S2CGetMeetingRoomListAck.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingRoomListAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingRoomListAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingRoomListAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingRoomListAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.MsgMeetingRoomInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingRoomListAck}
 */
proto.S2CGetMeetingRoomListAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingRoomListAck;
  return proto.S2CGetMeetingRoomListAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingRoomListAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingRoomListAck}
 */
proto.S2CGetMeetingRoomListAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgMeetingRoomInfo;
      reader.readMessage(value,proto.MsgMeetingRoomInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingRoomListAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingRoomListAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingRoomListAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingRoomListAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.MsgMeetingRoomInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingRoomListAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingRoomListAck} returns this
 */
proto.S2CGetMeetingRoomListAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MsgMeetingRoomInfo infos = 2;
 * @return {!Array<!proto.MsgMeetingRoomInfo>}
 */
proto.S2CGetMeetingRoomListAck.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.MsgMeetingRoomInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgMeetingRoomInfo, 2));
};


/**
 * @param {!Array<!proto.MsgMeetingRoomInfo>} value
 * @return {!proto.S2CGetMeetingRoomListAck} returns this
*/
proto.S2CGetMeetingRoomListAck.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MsgMeetingRoomInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingRoomInfo}
 */
proto.S2CGetMeetingRoomListAck.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MsgMeetingRoomInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingRoomListAck} returns this
 */
proto.S2CGetMeetingRoomListAck.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SExitMeetingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SExitMeetingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SExitMeetingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SExitMeetingReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SExitMeetingReq}
 */
proto.C2SExitMeetingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SExitMeetingReq;
  return proto.C2SExitMeetingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SExitMeetingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SExitMeetingReq}
 */
proto.C2SExitMeetingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SExitMeetingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SExitMeetingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SExitMeetingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SExitMeetingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SExitMeetingReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SExitMeetingReq} returns this
 */
proto.C2SExitMeetingReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CExitMeetingAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CExitMeetingAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CExitMeetingAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CExitMeetingAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    gosceneid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CExitMeetingAck}
 */
proto.S2CExitMeetingAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CExitMeetingAck;
  return proto.S2CExitMeetingAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CExitMeetingAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CExitMeetingAck}
 */
proto.S2CExitMeetingAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGosceneid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CExitMeetingAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CExitMeetingAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CExitMeetingAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CExitMeetingAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getGosceneid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CExitMeetingAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CExitMeetingAck} returns this
 */
proto.S2CExitMeetingAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 goSceneId = 2;
 * @return {number}
 */
proto.S2CExitMeetingAck.prototype.getGosceneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CExitMeetingAck} returns this
 */
proto.S2CExitMeetingAck.prototype.setGosceneid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingTicketsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingTicketsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingTicketsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingTicketsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ticketstype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    seatnum: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingTicketsInfo}
 */
proto.MsgMeetingTicketsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingTicketsInfo;
  return proto.MsgMeetingTicketsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingTicketsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingTicketsInfo}
 */
proto.MsgMeetingTicketsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTicketstype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingTicketsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingTicketsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingTicketsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingTicketsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTicketstype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSeatnum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.MsgMeetingTicketsInfo.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingTicketsInfo} returns this
 */
proto.MsgMeetingTicketsInfo.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 ticketsType = 2;
 * @return {number}
 */
proto.MsgMeetingTicketsInfo.prototype.getTicketstype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingTicketsInfo} returns this
 */
proto.MsgMeetingTicketsInfo.prototype.setTicketstype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 seatNum = 3;
 * @return {number}
 */
proto.MsgMeetingTicketsInfo.prototype.getSeatnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingTicketsInfo} returns this
 */
proto.MsgMeetingTicketsInfo.prototype.setSeatnum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SBuyMeetingTicketsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SBuyMeetingTicketsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SBuyMeetingTicketsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SBuyMeetingTicketsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.MsgMeetingTicketsInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SBuyMeetingTicketsReq}
 */
proto.C2SBuyMeetingTicketsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SBuyMeetingTicketsReq;
  return proto.C2SBuyMeetingTicketsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SBuyMeetingTicketsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SBuyMeetingTicketsReq}
 */
proto.C2SBuyMeetingTicketsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MsgMeetingTicketsInfo;
      reader.readMessage(value,proto.MsgMeetingTicketsInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SBuyMeetingTicketsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SBuyMeetingTicketsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SBuyMeetingTicketsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SBuyMeetingTicketsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MsgMeetingTicketsInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional MsgMeetingTicketsInfo info = 1;
 * @return {?proto.MsgMeetingTicketsInfo}
 */
proto.C2SBuyMeetingTicketsReq.prototype.getInfo = function() {
  return /** @type{?proto.MsgMeetingTicketsInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingTicketsInfo, 1));
};


/**
 * @param {?proto.MsgMeetingTicketsInfo|undefined} value
 * @return {!proto.C2SBuyMeetingTicketsReq} returns this
*/
proto.C2SBuyMeetingTicketsReq.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.C2SBuyMeetingTicketsReq} returns this
 */
proto.C2SBuyMeetingTicketsReq.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.C2SBuyMeetingTicketsReq.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CBuyMeetingTicketsAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CBuyMeetingTicketsAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CBuyMeetingTicketsAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CBuyMeetingTicketsAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CBuyMeetingTicketsAck}
 */
proto.S2CBuyMeetingTicketsAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CBuyMeetingTicketsAck;
  return proto.S2CBuyMeetingTicketsAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CBuyMeetingTicketsAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CBuyMeetingTicketsAck}
 */
proto.S2CBuyMeetingTicketsAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CBuyMeetingTicketsAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CBuyMeetingTicketsAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CBuyMeetingTicketsAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CBuyMeetingTicketsAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CBuyMeetingTicketsAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CBuyMeetingTicketsAck} returns this
 */
proto.S2CBuyMeetingTicketsAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingTicketsInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingTicketsInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingTicketsInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingTicketsInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingTicketsInfoReq}
 */
proto.C2SGetMeetingTicketsInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingTicketsInfoReq;
  return proto.C2SGetMeetingTicketsInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingTicketsInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingTicketsInfoReq}
 */
proto.C2SGetMeetingTicketsInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingTicketsInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingTicketsInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingTicketsInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingTicketsInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingTicketsInfoReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingTicketsInfoReq} returns this
 */
proto.C2SGetMeetingTicketsInfoReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingTicketsInfoAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingTicketsInfoAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingTicketsInfoAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingTicketsInfoAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.MsgMeetingTicketsInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingTicketsInfoAck}
 */
proto.S2CGetMeetingTicketsInfoAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingTicketsInfoAck;
  return proto.S2CGetMeetingTicketsInfoAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingTicketsInfoAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingTicketsInfoAck}
 */
proto.S2CGetMeetingTicketsInfoAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgMeetingTicketsInfo;
      reader.readMessage(value,proto.MsgMeetingTicketsInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingTicketsInfoAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingTicketsInfoAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingTicketsInfoAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingTicketsInfoAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MsgMeetingTicketsInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingTicketsInfoAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingTicketsInfoAck} returns this
 */
proto.S2CGetMeetingTicketsInfoAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MsgMeetingTicketsInfo info = 2;
 * @return {?proto.MsgMeetingTicketsInfo}
 */
proto.S2CGetMeetingTicketsInfoAck.prototype.getInfo = function() {
  return /** @type{?proto.MsgMeetingTicketsInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingTicketsInfo, 2));
};


/**
 * @param {?proto.MsgMeetingTicketsInfo|undefined} value
 * @return {!proto.S2CGetMeetingTicketsInfoAck} returns this
*/
proto.S2CGetMeetingTicketsInfoAck.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CGetMeetingTicketsInfoAck} returns this
 */
proto.S2CGetMeetingTicketsInfoAck.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CGetMeetingTicketsInfoAck.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MsgMeetingVoteInfo.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingVoteInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingVoteInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingVoteInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingVoteInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    votenum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rolename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    selecttype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    question: jspb.Message.getFieldWithDefault(msg, 5, ""),
    optionsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    optionscountList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    rolecount: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingVoteInfo}
 */
proto.MsgMeetingVoteInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingVoteInfo;
  return proto.MsgMeetingVoteInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingVoteInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingVoteInfo}
 */
proto.MsgMeetingVoteInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVotenum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRolename(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSelecttype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addOptions(value);
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOptionscount(values[i]);
      }
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRolecount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingVoteInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingVoteInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingVoteInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingVoteInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVotenum();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRolename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSelecttype();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getQuestion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getOptionscountList();
  if (f.length > 0) {
    writer.writePackedInt32(
      7,
      f
    );
  }
  f = message.getRolecount();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional int32 voteNum = 1;
 * @return {number}
 */
proto.MsgMeetingVoteInfo.prototype.getVotenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.setVotenum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.MsgMeetingVoteInfo.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string roleName = 3;
 * @return {string}
 */
proto.MsgMeetingVoteInfo.prototype.getRolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.setRolename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 selectType = 4;
 * @return {number}
 */
proto.MsgMeetingVoteInfo.prototype.getSelecttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.setSelecttype = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string question = 5;
 * @return {string}
 */
proto.MsgMeetingVoteInfo.prototype.getQuestion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.setQuestion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string options = 6;
 * @return {!Array<string>}
 */
proto.MsgMeetingVoteInfo.prototype.getOptionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.setOptionsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.addOptions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
};


/**
 * repeated int32 optionsCount = 7;
 * @return {!Array<number>}
 */
proto.MsgMeetingVoteInfo.prototype.getOptionscountList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.setOptionscountList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.addOptionscount = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.clearOptionscountList = function() {
  return this.setOptionscountList([]);
};


/**
 * optional int32 roleCount = 8;
 * @return {number}
 */
proto.MsgMeetingVoteInfo.prototype.getRolecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingVoteInfo} returns this
 */
proto.MsgMeetingVoteInfo.prototype.setRolecount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingVoteListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingVoteListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingVoteListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingVoteListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingVoteListReq}
 */
proto.C2SGetMeetingVoteListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingVoteListReq;
  return proto.C2SGetMeetingVoteListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingVoteListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingVoteListReq}
 */
proto.C2SGetMeetingVoteListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingVoteListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingVoteListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingVoteListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingVoteListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingVoteListReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingVoteListReq} returns this
 */
proto.C2SGetMeetingVoteListReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.S2CGetMeetingVoteListAck.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingVoteListAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingVoteListAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingVoteListAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingVoteListAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.MsgMeetingVoteInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingVoteListAck}
 */
proto.S2CGetMeetingVoteListAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingVoteListAck;
  return proto.S2CGetMeetingVoteListAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingVoteListAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingVoteListAck}
 */
proto.S2CGetMeetingVoteListAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgMeetingVoteInfo;
      reader.readMessage(value,proto.MsgMeetingVoteInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingVoteListAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingVoteListAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingVoteListAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingVoteListAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.MsgMeetingVoteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingVoteListAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingVoteListAck} returns this
 */
proto.S2CGetMeetingVoteListAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MsgMeetingVoteInfo infos = 2;
 * @return {!Array<!proto.MsgMeetingVoteInfo>}
 */
proto.S2CGetMeetingVoteListAck.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.MsgMeetingVoteInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgMeetingVoteInfo, 2));
};


/**
 * @param {!Array<!proto.MsgMeetingVoteInfo>} value
 * @return {!proto.S2CGetMeetingVoteListAck} returns this
*/
proto.S2CGetMeetingVoteListAck.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MsgMeetingVoteInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingVoteInfo}
 */
proto.S2CGetMeetingVoteListAck.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MsgMeetingVoteInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingVoteListAck} returns this
 */
proto.S2CGetMeetingVoteListAck.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SAddMeetingVoteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SAddMeetingVoteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SAddMeetingVoteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SAddMeetingVoteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    opttype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    info: (f = msg.getInfo()) && proto.MsgMeetingVoteInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SAddMeetingVoteReq}
 */
proto.C2SAddMeetingVoteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SAddMeetingVoteReq;
  return proto.C2SAddMeetingVoteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SAddMeetingVoteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SAddMeetingVoteReq}
 */
proto.C2SAddMeetingVoteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpttype(value);
      break;
    case 3:
      var value = new proto.MsgMeetingVoteInfo;
      reader.readMessage(value,proto.MsgMeetingVoteInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SAddMeetingVoteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SAddMeetingVoteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SAddMeetingVoteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SAddMeetingVoteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpttype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MsgMeetingVoteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SAddMeetingVoteReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SAddMeetingVoteReq} returns this
 */
proto.C2SAddMeetingVoteReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 optType = 2;
 * @return {number}
 */
proto.C2SAddMeetingVoteReq.prototype.getOpttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SAddMeetingVoteReq} returns this
 */
proto.C2SAddMeetingVoteReq.prototype.setOpttype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional MsgMeetingVoteInfo info = 3;
 * @return {?proto.MsgMeetingVoteInfo}
 */
proto.C2SAddMeetingVoteReq.prototype.getInfo = function() {
  return /** @type{?proto.MsgMeetingVoteInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingVoteInfo, 3));
};


/**
 * @param {?proto.MsgMeetingVoteInfo|undefined} value
 * @return {!proto.C2SAddMeetingVoteReq} returns this
*/
proto.C2SAddMeetingVoteReq.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.C2SAddMeetingVoteReq} returns this
 */
proto.C2SAddMeetingVoteReq.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.C2SAddMeetingVoteReq.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CAddMeetingVoteAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CAddMeetingVoteAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CAddMeetingVoteAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CAddMeetingVoteAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    opttype: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CAddMeetingVoteAck}
 */
proto.S2CAddMeetingVoteAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CAddMeetingVoteAck;
  return proto.S2CAddMeetingVoteAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CAddMeetingVoteAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CAddMeetingVoteAck}
 */
proto.S2CAddMeetingVoteAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpttype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CAddMeetingVoteAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CAddMeetingVoteAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CAddMeetingVoteAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CAddMeetingVoteAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOpttype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CAddMeetingVoteAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CAddMeetingVoteAck} returns this
 */
proto.S2CAddMeetingVoteAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 optType = 2;
 * @return {number}
 */
proto.S2CAddMeetingVoteAck.prototype.getOpttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CAddMeetingVoteAck} returns this
 */
proto.S2CAddMeetingVoteAck.prototype.setOpttype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SMeetingVoteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SMeetingVoteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SMeetingVoteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingVoteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    info: (f = msg.getInfo()) && proto.MsgMeetingVoteInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SMeetingVoteReq}
 */
proto.C2SMeetingVoteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SMeetingVoteReq;
  return proto.C2SMeetingVoteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SMeetingVoteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SMeetingVoteReq}
 */
proto.C2SMeetingVoteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = new proto.MsgMeetingVoteInfo;
      reader.readMessage(value,proto.MsgMeetingVoteInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SMeetingVoteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SMeetingVoteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SMeetingVoteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingVoteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MsgMeetingVoteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SMeetingVoteReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingVoteReq} returns this
 */
proto.C2SMeetingVoteReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MsgMeetingVoteInfo info = 2;
 * @return {?proto.MsgMeetingVoteInfo}
 */
proto.C2SMeetingVoteReq.prototype.getInfo = function() {
  return /** @type{?proto.MsgMeetingVoteInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingVoteInfo, 2));
};


/**
 * @param {?proto.MsgMeetingVoteInfo|undefined} value
 * @return {!proto.C2SMeetingVoteReq} returns this
*/
proto.C2SMeetingVoteReq.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.C2SMeetingVoteReq} returns this
 */
proto.C2SMeetingVoteReq.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.C2SMeetingVoteReq.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CMeetingVoteAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CMeetingVoteAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CMeetingVoteAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingVoteAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CMeetingVoteAck}
 */
proto.S2CMeetingVoteAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CMeetingVoteAck;
  return proto.S2CMeetingVoteAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CMeetingVoteAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CMeetingVoteAck}
 */
proto.S2CMeetingVoteAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CMeetingVoteAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CMeetingVoteAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CMeetingVoteAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingVoteAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CMeetingVoteAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingVoteAck} returns this
 */
proto.S2CMeetingVoteAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.S2CMeetingVoteAck.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingVoteAck} returns this
 */
proto.S2CMeetingVoteAck.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SMeetingChatReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SMeetingChatReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SMeetingChatReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingChatReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isnotice: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SMeetingChatReq}
 */
proto.C2SMeetingChatReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SMeetingChatReq;
  return proto.C2SMeetingChatReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SMeetingChatReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SMeetingChatReq}
 */
proto.C2SMeetingChatReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsnotice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SMeetingChatReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SMeetingChatReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SMeetingChatReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingChatReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsnotice();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SMeetingChatReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingChatReq} returns this
 */
proto.C2SMeetingChatReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.C2SMeetingChatReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingChatReq} returns this
 */
proto.C2SMeetingChatReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 isNotice = 3;
 * @return {number}
 */
proto.C2SMeetingChatReq.prototype.getIsnotice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingChatReq} returns this
 */
proto.C2SMeetingChatReq.prototype.setIsnotice = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CMeetingChatAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CMeetingChatAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CMeetingChatAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingChatAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isnotice: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CMeetingChatAck}
 */
proto.S2CMeetingChatAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CMeetingChatAck;
  return proto.S2CMeetingChatAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CMeetingChatAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CMeetingChatAck}
 */
proto.S2CMeetingChatAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRolename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsnotice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CMeetingChatAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CMeetingChatAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CMeetingChatAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingChatAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsnotice();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string roleName = 1;
 * @return {string}
 */
proto.S2CMeetingChatAck.prototype.getRolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingChatAck} returns this
 */
proto.S2CMeetingChatAck.prototype.setRolename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.S2CMeetingChatAck.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingChatAck} returns this
 */
proto.S2CMeetingChatAck.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 isNotice = 3;
 * @return {number}
 */
proto.S2CMeetingChatAck.prototype.getIsnotice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingChatAck} returns this
 */
proto.S2CMeetingChatAck.prototype.setIsnotice = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingSeatInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingSeatInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingSeatInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingSeatInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingSeatInfoReq}
 */
proto.C2SGetMeetingSeatInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingSeatInfoReq;
  return proto.C2SGetMeetingSeatInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingSeatInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingSeatInfoReq}
 */
proto.C2SGetMeetingSeatInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingSeatInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingSeatInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingSeatInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingSeatInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingSeatInfoReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingSeatInfoReq} returns this
 */
proto.C2SGetMeetingSeatInfoReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.S2CGetMeetingSeatInfoAck.repeatedFields_ = [7,8,9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingSeatInfoAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingSeatInfoAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingSeatInfoAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    seatatotalnum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    seatbtotalnum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    seatctotalnum: jspb.Message.getFieldWithDefault(msg, 4, 0),
    seatdtotalnum: jspb.Message.getFieldWithDefault(msg, 5, 0),
    audienceareanum: jspb.Message.getFieldWithDefault(msg, 6, 0),
    soldseataList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    soldseatbList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    soldseatcList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    soldseatdList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    soldaudiencearea: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingSeatInfoAck}
 */
proto.S2CGetMeetingSeatInfoAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingSeatInfoAck;
  return proto.S2CGetMeetingSeatInfoAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingSeatInfoAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingSeatInfoAck}
 */
proto.S2CGetMeetingSeatInfoAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatatotalnum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatbtotalnum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatctotalnum(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatdtotalnum(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAudienceareanum(value);
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSoldseata(values[i]);
      }
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSoldseatb(values[i]);
      }
      break;
    case 9:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSoldseatc(values[i]);
      }
      break;
    case 10:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSoldseatd(values[i]);
      }
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSoldaudiencearea(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingSeatInfoAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingSeatInfoAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingSeatInfoAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSeatatotalnum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSeatbtotalnum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSeatctotalnum();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSeatdtotalnum();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getAudienceareanum();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getSoldseataList();
  if (f.length > 0) {
    writer.writePackedInt32(
      7,
      f
    );
  }
  f = message.getSoldseatbList();
  if (f.length > 0) {
    writer.writePackedInt32(
      8,
      f
    );
  }
  f = message.getSoldseatcList();
  if (f.length > 0) {
    writer.writePackedInt32(
      9,
      f
    );
  }
  f = message.getSoldseatdList();
  if (f.length > 0) {
    writer.writePackedInt32(
      10,
      f
    );
  }
  f = message.getSoldaudiencearea();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 seatATotalNum = 2;
 * @return {number}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getSeatatotalnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setSeatatotalnum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 seatBTotalNum = 3;
 * @return {number}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getSeatbtotalnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setSeatbtotalnum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 seatCTotalNum = 4;
 * @return {number}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getSeatctotalnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setSeatctotalnum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 seatDTotalNum = 5;
 * @return {number}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getSeatdtotalnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setSeatdtotalnum = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 audienceAreaNum = 6;
 * @return {number}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getAudienceareanum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setAudienceareanum = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated int32 soldSeatA = 7;
 * @return {!Array<number>}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getSoldseataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setSoldseataList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.addSoldseata = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.clearSoldseataList = function() {
  return this.setSoldseataList([]);
};


/**
 * repeated int32 soldSeatB = 8;
 * @return {!Array<number>}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getSoldseatbList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setSoldseatbList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.addSoldseatb = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.clearSoldseatbList = function() {
  return this.setSoldseatbList([]);
};


/**
 * repeated int32 soldSeatC = 9;
 * @return {!Array<number>}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getSoldseatcList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setSoldseatcList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.addSoldseatc = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.clearSoldseatcList = function() {
  return this.setSoldseatcList([]);
};


/**
 * repeated int32 soldSeatD = 10;
 * @return {!Array<number>}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getSoldseatdList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setSoldseatdList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.addSoldseatd = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.clearSoldseatdList = function() {
  return this.setSoldseatdList([]);
};


/**
 * optional int32 soldAudienceArea = 11;
 * @return {number}
 */
proto.S2CGetMeetingSeatInfoAck.prototype.getSoldaudiencearea = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingSeatInfoAck} returns this
 */
proto.S2CGetMeetingSeatInfoAck.prototype.setSoldaudiencearea = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SMeetingForScreenReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SMeetingForScreenReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SMeetingForScreenReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingForScreenReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sharetype: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SMeetingForScreenReq}
 */
proto.C2SMeetingForScreenReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SMeetingForScreenReq;
  return proto.C2SMeetingForScreenReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SMeetingForScreenReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SMeetingForScreenReq}
 */
proto.C2SMeetingForScreenReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSharetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SMeetingForScreenReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SMeetingForScreenReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SMeetingForScreenReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingForScreenReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSharetype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SMeetingForScreenReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingForScreenReq} returns this
 */
proto.C2SMeetingForScreenReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 shareType = 2;
 * @return {number}
 */
proto.C2SMeetingForScreenReq.prototype.getSharetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingForScreenReq} returns this
 */
proto.C2SMeetingForScreenReq.prototype.setSharetype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CMeetingForScreenAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CMeetingForScreenAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CMeetingForScreenAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingForScreenAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rolename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sharetype: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CMeetingForScreenAck}
 */
proto.S2CMeetingForScreenAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CMeetingForScreenAck;
  return proto.S2CMeetingForScreenAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CMeetingForScreenAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CMeetingForScreenAck}
 */
proto.S2CMeetingForScreenAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRolename(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSharetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CMeetingForScreenAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CMeetingForScreenAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CMeetingForScreenAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingForScreenAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRolename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSharetype();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CMeetingForScreenAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingForScreenAck} returns this
 */
proto.S2CMeetingForScreenAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.S2CMeetingForScreenAck.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingForScreenAck} returns this
 */
proto.S2CMeetingForScreenAck.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string roleName = 3;
 * @return {string}
 */
proto.S2CMeetingForScreenAck.prototype.getRolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingForScreenAck} returns this
 */
proto.S2CMeetingForScreenAck.prototype.setRolename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 shareType = 4;
 * @return {number}
 */
proto.S2CMeetingForScreenAck.prototype.getSharetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingForScreenAck} returns this
 */
proto.S2CMeetingForScreenAck.prototype.setSharetype = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SStartMeetingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SStartMeetingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SStartMeetingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SStartMeetingReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SStartMeetingReq}
 */
proto.C2SStartMeetingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SStartMeetingReq;
  return proto.C2SStartMeetingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SStartMeetingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SStartMeetingReq}
 */
proto.C2SStartMeetingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SStartMeetingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SStartMeetingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SStartMeetingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SStartMeetingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SStartMeetingReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SStartMeetingReq} returns this
 */
proto.C2SStartMeetingReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CStartMeetingAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CStartMeetingAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CStartMeetingAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CStartMeetingAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CStartMeetingAck}
 */
proto.S2CStartMeetingAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CStartMeetingAck;
  return proto.S2CStartMeetingAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CStartMeetingAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CStartMeetingAck}
 */
proto.S2CStartMeetingAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CStartMeetingAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CStartMeetingAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CStartMeetingAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CStartMeetingAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CStartMeetingAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CStartMeetingAck} returns this
 */
proto.S2CStartMeetingAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SEndMeetingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SEndMeetingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SEndMeetingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SEndMeetingReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SEndMeetingReq}
 */
proto.C2SEndMeetingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SEndMeetingReq;
  return proto.C2SEndMeetingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SEndMeetingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SEndMeetingReq}
 */
proto.C2SEndMeetingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SEndMeetingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SEndMeetingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SEndMeetingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SEndMeetingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SEndMeetingReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SEndMeetingReq} returns this
 */
proto.C2SEndMeetingReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CEndMeetingAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CEndMeetingAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CEndMeetingAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CEndMeetingAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    countdown: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CEndMeetingAck}
 */
proto.S2CEndMeetingAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CEndMeetingAck;
  return proto.S2CEndMeetingAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CEndMeetingAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CEndMeetingAck}
 */
proto.S2CEndMeetingAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCountdown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CEndMeetingAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CEndMeetingAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CEndMeetingAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CEndMeetingAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCountdown();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CEndMeetingAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CEndMeetingAck} returns this
 */
proto.S2CEndMeetingAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 countDown = 2;
 * @return {number}
 */
proto.S2CEndMeetingAck.prototype.getCountdown = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CEndMeetingAck} returns this
 */
proto.S2CEndMeetingAck.prototype.setCountdown = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SStartMeetingVoteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SStartMeetingVoteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SStartMeetingVoteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SStartMeetingVoteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    votenum: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SStartMeetingVoteReq}
 */
proto.C2SStartMeetingVoteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SStartMeetingVoteReq;
  return proto.C2SStartMeetingVoteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SStartMeetingVoteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SStartMeetingVoteReq}
 */
proto.C2SStartMeetingVoteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVotenum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SStartMeetingVoteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SStartMeetingVoteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SStartMeetingVoteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SStartMeetingVoteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVotenum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SStartMeetingVoteReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SStartMeetingVoteReq} returns this
 */
proto.C2SStartMeetingVoteReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 voteNum = 2;
 * @return {number}
 */
proto.C2SStartMeetingVoteReq.prototype.getVotenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SStartMeetingVoteReq} returns this
 */
proto.C2SStartMeetingVoteReq.prototype.setVotenum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CStartMeetingVoteAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CStartMeetingVoteAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CStartMeetingVoteAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CStartMeetingVoteAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.MsgMeetingVoteInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CStartMeetingVoteAck}
 */
proto.S2CStartMeetingVoteAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CStartMeetingVoteAck;
  return proto.S2CStartMeetingVoteAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CStartMeetingVoteAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CStartMeetingVoteAck}
 */
proto.S2CStartMeetingVoteAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgMeetingVoteInfo;
      reader.readMessage(value,proto.MsgMeetingVoteInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CStartMeetingVoteAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CStartMeetingVoteAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CStartMeetingVoteAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CStartMeetingVoteAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MsgMeetingVoteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CStartMeetingVoteAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CStartMeetingVoteAck} returns this
 */
proto.S2CStartMeetingVoteAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MsgMeetingVoteInfo info = 2;
 * @return {?proto.MsgMeetingVoteInfo}
 */
proto.S2CStartMeetingVoteAck.prototype.getInfo = function() {
  return /** @type{?proto.MsgMeetingVoteInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingVoteInfo, 2));
};


/**
 * @param {?proto.MsgMeetingVoteInfo|undefined} value
 * @return {!proto.S2CStartMeetingVoteAck} returns this
*/
proto.S2CStartMeetingVoteAck.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CStartMeetingVoteAck} returns this
 */
proto.S2CStartMeetingVoteAck.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CStartMeetingVoteAck.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SMeetingSetMgrReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SMeetingSetMgrReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SMeetingSetMgrReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingSetMgrReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    speechrule: (f = msg.getSpeechrule()) && proto.MsgMeetingSpeechRule.toObject(includeInstance, f),
    screentypea: jspb.Message.getFieldWithDefault(msg, 3, 0),
    screentypeb: jspb.Message.getFieldWithDefault(msg, 4, 0),
    screentypec: jspb.Message.getFieldWithDefault(msg, 5, 0),
    screentyped: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SMeetingSetMgrReq}
 */
proto.C2SMeetingSetMgrReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SMeetingSetMgrReq;
  return proto.C2SMeetingSetMgrReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SMeetingSetMgrReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SMeetingSetMgrReq}
 */
proto.C2SMeetingSetMgrReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = new proto.MsgMeetingSpeechRule;
      reader.readMessage(value,proto.MsgMeetingSpeechRule.deserializeBinaryFromReader);
      msg.setSpeechrule(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentypea(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentypeb(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentypec(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentyped(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SMeetingSetMgrReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SMeetingSetMgrReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SMeetingSetMgrReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingSetMgrReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpeechrule();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MsgMeetingSpeechRule.serializeBinaryToWriter
    );
  }
  f = message.getScreentypea();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getScreentypeb();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getScreentypec();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getScreentyped();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SMeetingSetMgrReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingSetMgrReq} returns this
 */
proto.C2SMeetingSetMgrReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MsgMeetingSpeechRule speechRule = 2;
 * @return {?proto.MsgMeetingSpeechRule}
 */
proto.C2SMeetingSetMgrReq.prototype.getSpeechrule = function() {
  return /** @type{?proto.MsgMeetingSpeechRule} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingSpeechRule, 2));
};


/**
 * @param {?proto.MsgMeetingSpeechRule|undefined} value
 * @return {!proto.C2SMeetingSetMgrReq} returns this
*/
proto.C2SMeetingSetMgrReq.prototype.setSpeechrule = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.C2SMeetingSetMgrReq} returns this
 */
proto.C2SMeetingSetMgrReq.prototype.clearSpeechrule = function() {
  return this.setSpeechrule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.C2SMeetingSetMgrReq.prototype.hasSpeechrule = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 screenTypeA = 3;
 * @return {number}
 */
proto.C2SMeetingSetMgrReq.prototype.getScreentypea = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingSetMgrReq} returns this
 */
proto.C2SMeetingSetMgrReq.prototype.setScreentypea = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 screenTypeB = 4;
 * @return {number}
 */
proto.C2SMeetingSetMgrReq.prototype.getScreentypeb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingSetMgrReq} returns this
 */
proto.C2SMeetingSetMgrReq.prototype.setScreentypeb = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 screenTypeC = 5;
 * @return {number}
 */
proto.C2SMeetingSetMgrReq.prototype.getScreentypec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingSetMgrReq} returns this
 */
proto.C2SMeetingSetMgrReq.prototype.setScreentypec = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 screenTypeD = 6;
 * @return {number}
 */
proto.C2SMeetingSetMgrReq.prototype.getScreentyped = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingSetMgrReq} returns this
 */
proto.C2SMeetingSetMgrReq.prototype.setScreentyped = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CMeetingSetMgrAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CMeetingSetMgrAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CMeetingSetMgrAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingSetMgrAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    speechrule: (f = msg.getSpeechrule()) && proto.MsgMeetingSpeechRule.toObject(includeInstance, f),
    screentypea: jspb.Message.getFieldWithDefault(msg, 3, 0),
    screentypeb: jspb.Message.getFieldWithDefault(msg, 4, 0),
    screentypec: jspb.Message.getFieldWithDefault(msg, 5, 0),
    screentyped: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CMeetingSetMgrAck}
 */
proto.S2CMeetingSetMgrAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CMeetingSetMgrAck;
  return proto.S2CMeetingSetMgrAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CMeetingSetMgrAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CMeetingSetMgrAck}
 */
proto.S2CMeetingSetMgrAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgMeetingSpeechRule;
      reader.readMessage(value,proto.MsgMeetingSpeechRule.deserializeBinaryFromReader);
      msg.setSpeechrule(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentypea(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentypeb(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentypec(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScreentyped(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CMeetingSetMgrAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CMeetingSetMgrAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CMeetingSetMgrAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingSetMgrAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpeechrule();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MsgMeetingSpeechRule.serializeBinaryToWriter
    );
  }
  f = message.getScreentypea();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getScreentypeb();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getScreentypec();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getScreentyped();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CMeetingSetMgrAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingSetMgrAck} returns this
 */
proto.S2CMeetingSetMgrAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MsgMeetingSpeechRule speechRule = 2;
 * @return {?proto.MsgMeetingSpeechRule}
 */
proto.S2CMeetingSetMgrAck.prototype.getSpeechrule = function() {
  return /** @type{?proto.MsgMeetingSpeechRule} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingSpeechRule, 2));
};


/**
 * @param {?proto.MsgMeetingSpeechRule|undefined} value
 * @return {!proto.S2CMeetingSetMgrAck} returns this
*/
proto.S2CMeetingSetMgrAck.prototype.setSpeechrule = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CMeetingSetMgrAck} returns this
 */
proto.S2CMeetingSetMgrAck.prototype.clearSpeechrule = function() {
  return this.setSpeechrule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CMeetingSetMgrAck.prototype.hasSpeechrule = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 screenTypeA = 3;
 * @return {number}
 */
proto.S2CMeetingSetMgrAck.prototype.getScreentypea = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingSetMgrAck} returns this
 */
proto.S2CMeetingSetMgrAck.prototype.setScreentypea = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 screenTypeB = 4;
 * @return {number}
 */
proto.S2CMeetingSetMgrAck.prototype.getScreentypeb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingSetMgrAck} returns this
 */
proto.S2CMeetingSetMgrAck.prototype.setScreentypeb = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 screenTypeC = 5;
 * @return {number}
 */
proto.S2CMeetingSetMgrAck.prototype.getScreentypec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingSetMgrAck} returns this
 */
proto.S2CMeetingSetMgrAck.prototype.setScreentypec = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 screenTypeD = 6;
 * @return {number}
 */
proto.S2CMeetingSetMgrAck.prototype.getScreentyped = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingSetMgrAck} returns this
 */
proto.S2CMeetingSetMgrAck.prototype.setScreentyped = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgTospeakInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgTospeakInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgTospeakInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgTospeakInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    icon: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rolename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    applytime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    isopened: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgTospeakInfo}
 */
proto.MsgTospeakInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgTospeakInfo;
  return proto.MsgTospeakInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgTospeakInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgTospeakInfo}
 */
proto.MsgTospeakInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIcon(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRolename(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplytime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsopened(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgTospeakInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgTospeakInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgTospeakInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgTospeakInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIcon();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRolename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApplytime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getIsopened();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 roleId = 1;
 * @return {number}
 */
proto.MsgTospeakInfo.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgTospeakInfo} returns this
 */
proto.MsgTospeakInfo.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 icon = 2;
 * @return {number}
 */
proto.MsgTospeakInfo.prototype.getIcon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgTospeakInfo} returns this
 */
proto.MsgTospeakInfo.prototype.setIcon = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string roleName = 3;
 * @return {string}
 */
proto.MsgTospeakInfo.prototype.getRolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgTospeakInfo} returns this
 */
proto.MsgTospeakInfo.prototype.setRolename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 applyTime = 4;
 * @return {number}
 */
proto.MsgTospeakInfo.prototype.getApplytime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgTospeakInfo} returns this
 */
proto.MsgTospeakInfo.prototype.setApplytime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 isOpened = 5;
 * @return {number}
 */
proto.MsgTospeakInfo.prototype.getIsopened = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgTospeakInfo} returns this
 */
proto.MsgTospeakInfo.prototype.setIsopened = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingTospeakListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingTospeakListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingTospeakListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingTospeakListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingTospeakListReq}
 */
proto.C2SGetMeetingTospeakListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingTospeakListReq;
  return proto.C2SGetMeetingTospeakListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingTospeakListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingTospeakListReq}
 */
proto.C2SGetMeetingTospeakListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingTospeakListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingTospeakListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingTospeakListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingTospeakListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingTospeakListReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingTospeakListReq} returns this
 */
proto.C2SGetMeetingTospeakListReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.S2CGetMeetingTospeakListAck.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingTospeakListAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingTospeakListAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingTospeakListAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingTospeakListAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.MsgTospeakInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingTospeakListAck}
 */
proto.S2CGetMeetingTospeakListAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingTospeakListAck;
  return proto.S2CGetMeetingTospeakListAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingTospeakListAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingTospeakListAck}
 */
proto.S2CGetMeetingTospeakListAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgTospeakInfo;
      reader.readMessage(value,proto.MsgTospeakInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingTospeakListAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingTospeakListAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingTospeakListAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingTospeakListAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.MsgTospeakInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingTospeakListAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingTospeakListAck} returns this
 */
proto.S2CGetMeetingTospeakListAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MsgTospeakInfo infos = 2;
 * @return {!Array<!proto.MsgTospeakInfo>}
 */
proto.S2CGetMeetingTospeakListAck.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.MsgTospeakInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgTospeakInfo, 2));
};


/**
 * @param {!Array<!proto.MsgTospeakInfo>} value
 * @return {!proto.S2CGetMeetingTospeakListAck} returns this
*/
proto.S2CGetMeetingTospeakListAck.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MsgTospeakInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgTospeakInfo}
 */
proto.S2CGetMeetingTospeakListAck.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MsgTospeakInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingTospeakListAck} returns this
 */
proto.S2CGetMeetingTospeakListAck.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SApplyMeetingTospeakReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SApplyMeetingTospeakReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SApplyMeetingTospeakReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SApplyMeetingTospeakReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SApplyMeetingTospeakReq}
 */
proto.C2SApplyMeetingTospeakReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SApplyMeetingTospeakReq;
  return proto.C2SApplyMeetingTospeakReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SApplyMeetingTospeakReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SApplyMeetingTospeakReq}
 */
proto.C2SApplyMeetingTospeakReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SApplyMeetingTospeakReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SApplyMeetingTospeakReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SApplyMeetingTospeakReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SApplyMeetingTospeakReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SApplyMeetingTospeakReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SApplyMeetingTospeakReq} returns this
 */
proto.C2SApplyMeetingTospeakReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CApplyMeetingTospeakAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CApplyMeetingTospeakAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CApplyMeetingTospeakAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CApplyMeetingTospeakAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.MsgTospeakInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CApplyMeetingTospeakAck}
 */
proto.S2CApplyMeetingTospeakAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CApplyMeetingTospeakAck;
  return proto.S2CApplyMeetingTospeakAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CApplyMeetingTospeakAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CApplyMeetingTospeakAck}
 */
proto.S2CApplyMeetingTospeakAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgTospeakInfo;
      reader.readMessage(value,proto.MsgTospeakInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CApplyMeetingTospeakAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CApplyMeetingTospeakAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CApplyMeetingTospeakAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CApplyMeetingTospeakAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MsgTospeakInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CApplyMeetingTospeakAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CApplyMeetingTospeakAck} returns this
 */
proto.S2CApplyMeetingTospeakAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MsgTospeakInfo info = 2;
 * @return {?proto.MsgTospeakInfo}
 */
proto.S2CApplyMeetingTospeakAck.prototype.getInfo = function() {
  return /** @type{?proto.MsgTospeakInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgTospeakInfo, 2));
};


/**
 * @param {?proto.MsgTospeakInfo|undefined} value
 * @return {!proto.S2CApplyMeetingTospeakAck} returns this
*/
proto.S2CApplyMeetingTospeakAck.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CApplyMeetingTospeakAck} returns this
 */
proto.S2CApplyMeetingTospeakAck.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CApplyMeetingTospeakAck.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SOpenMeetingTospeakReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SOpenMeetingTospeakReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SOpenMeetingTospeakReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SOpenMeetingTospeakReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SOpenMeetingTospeakReq}
 */
proto.C2SOpenMeetingTospeakReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SOpenMeetingTospeakReq;
  return proto.C2SOpenMeetingTospeakReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SOpenMeetingTospeakReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SOpenMeetingTospeakReq}
 */
proto.C2SOpenMeetingTospeakReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SOpenMeetingTospeakReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SOpenMeetingTospeakReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SOpenMeetingTospeakReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SOpenMeetingTospeakReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SOpenMeetingTospeakReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SOpenMeetingTospeakReq} returns this
 */
proto.C2SOpenMeetingTospeakReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.C2SOpenMeetingTospeakReq.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SOpenMeetingTospeakReq} returns this
 */
proto.C2SOpenMeetingTospeakReq.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2COpenMeetingTospeakAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2COpenMeetingTospeakAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2COpenMeetingTospeakAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2COpenMeetingTospeakAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    creatorname: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2COpenMeetingTospeakAck}
 */
proto.S2COpenMeetingTospeakAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2COpenMeetingTospeakAck;
  return proto.S2COpenMeetingTospeakAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2COpenMeetingTospeakAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2COpenMeetingTospeakAck}
 */
proto.S2COpenMeetingTospeakAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatorname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2COpenMeetingTospeakAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2COpenMeetingTospeakAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2COpenMeetingTospeakAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2COpenMeetingTospeakAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCreatorname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2COpenMeetingTospeakAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2COpenMeetingTospeakAck} returns this
 */
proto.S2COpenMeetingTospeakAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.S2COpenMeetingTospeakAck.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2COpenMeetingTospeakAck} returns this
 */
proto.S2COpenMeetingTospeakAck.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string creatorName = 3;
 * @return {string}
 */
proto.S2COpenMeetingTospeakAck.prototype.getCreatorname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2COpenMeetingTospeakAck} returns this
 */
proto.S2COpenMeetingTospeakAck.prototype.setCreatorname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SCloseMeetingTospeakReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SCloseMeetingTospeakReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SCloseMeetingTospeakReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SCloseMeetingTospeakReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SCloseMeetingTospeakReq}
 */
proto.C2SCloseMeetingTospeakReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SCloseMeetingTospeakReq;
  return proto.C2SCloseMeetingTospeakReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SCloseMeetingTospeakReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SCloseMeetingTospeakReq}
 */
proto.C2SCloseMeetingTospeakReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SCloseMeetingTospeakReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SCloseMeetingTospeakReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SCloseMeetingTospeakReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SCloseMeetingTospeakReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SCloseMeetingTospeakReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SCloseMeetingTospeakReq} returns this
 */
proto.C2SCloseMeetingTospeakReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.C2SCloseMeetingTospeakReq.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SCloseMeetingTospeakReq} returns this
 */
proto.C2SCloseMeetingTospeakReq.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CCloseMeetingTospeakAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CCloseMeetingTospeakAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CCloseMeetingTospeakAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CCloseMeetingTospeakAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    creatorname: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CCloseMeetingTospeakAck}
 */
proto.S2CCloseMeetingTospeakAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CCloseMeetingTospeakAck;
  return proto.S2CCloseMeetingTospeakAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CCloseMeetingTospeakAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CCloseMeetingTospeakAck}
 */
proto.S2CCloseMeetingTospeakAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatorname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CCloseMeetingTospeakAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CCloseMeetingTospeakAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CCloseMeetingTospeakAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CCloseMeetingTospeakAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCreatorname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CCloseMeetingTospeakAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CCloseMeetingTospeakAck} returns this
 */
proto.S2CCloseMeetingTospeakAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.S2CCloseMeetingTospeakAck.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CCloseMeetingTospeakAck} returns this
 */
proto.S2CCloseMeetingTospeakAck.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string creatorName = 3;
 * @return {string}
 */
proto.S2CCloseMeetingTospeakAck.prototype.getCreatorname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CCloseMeetingTospeakAck} returns this
 */
proto.S2CCloseMeetingTospeakAck.prototype.setCreatorname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SRefusedMeetingTospeakReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SRefusedMeetingTospeakReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SRefusedMeetingTospeakReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SRefusedMeetingTospeakReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SRefusedMeetingTospeakReq}
 */
proto.C2SRefusedMeetingTospeakReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SRefusedMeetingTospeakReq;
  return proto.C2SRefusedMeetingTospeakReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SRefusedMeetingTospeakReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SRefusedMeetingTospeakReq}
 */
proto.C2SRefusedMeetingTospeakReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SRefusedMeetingTospeakReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SRefusedMeetingTospeakReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SRefusedMeetingTospeakReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SRefusedMeetingTospeakReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SRefusedMeetingTospeakReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SRefusedMeetingTospeakReq} returns this
 */
proto.C2SRefusedMeetingTospeakReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CRefusedMeetingTospeakAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CRefusedMeetingTospeakAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CRefusedMeetingTospeakAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CRefusedMeetingTospeakAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CRefusedMeetingTospeakAck}
 */
proto.S2CRefusedMeetingTospeakAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CRefusedMeetingTospeakAck;
  return proto.S2CRefusedMeetingTospeakAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CRefusedMeetingTospeakAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CRefusedMeetingTospeakAck}
 */
proto.S2CRefusedMeetingTospeakAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CRefusedMeetingTospeakAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CRefusedMeetingTospeakAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CRefusedMeetingTospeakAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CRefusedMeetingTospeakAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CRefusedMeetingTospeakAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CRefusedMeetingTospeakAck} returns this
 */
proto.S2CRefusedMeetingTospeakAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SMeetingInviteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SMeetingInviteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SMeetingInviteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingInviteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inviteroleid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    invitetype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    seatnum: jspb.Message.getFieldWithDefault(msg, 4, 0),
    describe: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SMeetingInviteReq}
 */
proto.C2SMeetingInviteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SMeetingInviteReq;
  return proto.C2SMeetingInviteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SMeetingInviteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SMeetingInviteReq}
 */
proto.C2SMeetingInviteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInviteroleid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInvitetype(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatnum(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescribe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SMeetingInviteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SMeetingInviteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SMeetingInviteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingInviteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInviteroleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInvitetype();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSeatnum();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getDescribe();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SMeetingInviteReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingInviteReq} returns this
 */
proto.C2SMeetingInviteReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 inviteRoleId = 2;
 * @return {number}
 */
proto.C2SMeetingInviteReq.prototype.getInviteroleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingInviteReq} returns this
 */
proto.C2SMeetingInviteReq.prototype.setInviteroleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 inviteType = 3;
 * @return {number}
 */
proto.C2SMeetingInviteReq.prototype.getInvitetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingInviteReq} returns this
 */
proto.C2SMeetingInviteReq.prototype.setInvitetype = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 seatNum = 4;
 * @return {number}
 */
proto.C2SMeetingInviteReq.prototype.getSeatnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingInviteReq} returns this
 */
proto.C2SMeetingInviteReq.prototype.setSeatnum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string describe = 5;
 * @return {string}
 */
proto.C2SMeetingInviteReq.prototype.getDescribe = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingInviteReq} returns this
 */
proto.C2SMeetingInviteReq.prototype.setDescribe = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CMeetingInviteAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CMeetingInviteAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CMeetingInviteAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingInviteAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CMeetingInviteAck}
 */
proto.S2CMeetingInviteAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CMeetingInviteAck;
  return proto.S2CMeetingInviteAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CMeetingInviteAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CMeetingInviteAck}
 */
proto.S2CMeetingInviteAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CMeetingInviteAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CMeetingInviteAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CMeetingInviteAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingInviteAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CMeetingInviteAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingInviteAck} returns this
 */
proto.S2CMeetingInviteAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingBeInviteInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingBeInviteInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingBeInviteInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingBeInviteInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rolename: jspb.Message.getFieldWithDefault(msg, 2, ""),
    meetingid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    meetingname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    meetingintroduction: jspb.Message.getFieldWithDefault(msg, 5, ""),
    describe: jspb.Message.getFieldWithDefault(msg, 6, ""),
    isagree: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingBeInviteInfo}
 */
proto.MsgMeetingBeInviteInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingBeInviteInfo;
  return proto.MsgMeetingBeInviteInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingBeInviteInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingBeInviteInfo}
 */
proto.MsgMeetingBeInviteInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRolename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingintroduction(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescribe(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsagree(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingBeInviteInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingBeInviteInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingBeInviteInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingBeInviteInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRolename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMeetingname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMeetingintroduction();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescribe();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIsagree();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int32 roleId = 1;
 * @return {number}
 */
proto.MsgMeetingBeInviteInfo.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingBeInviteInfo} returns this
 */
proto.MsgMeetingBeInviteInfo.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string roleName = 2;
 * @return {string}
 */
proto.MsgMeetingBeInviteInfo.prototype.getRolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingBeInviteInfo} returns this
 */
proto.MsgMeetingBeInviteInfo.prototype.setRolename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string meetingId = 3;
 * @return {string}
 */
proto.MsgMeetingBeInviteInfo.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingBeInviteInfo} returns this
 */
proto.MsgMeetingBeInviteInfo.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string meetingName = 4;
 * @return {string}
 */
proto.MsgMeetingBeInviteInfo.prototype.getMeetingname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingBeInviteInfo} returns this
 */
proto.MsgMeetingBeInviteInfo.prototype.setMeetingname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string meetingIntroduction = 5;
 * @return {string}
 */
proto.MsgMeetingBeInviteInfo.prototype.getMeetingintroduction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingBeInviteInfo} returns this
 */
proto.MsgMeetingBeInviteInfo.prototype.setMeetingintroduction = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string describe = 6;
 * @return {string}
 */
proto.MsgMeetingBeInviteInfo.prototype.getDescribe = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingBeInviteInfo} returns this
 */
proto.MsgMeetingBeInviteInfo.prototype.setDescribe = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 isAgree = 7;
 * @return {number}
 */
proto.MsgMeetingBeInviteInfo.prototype.getIsagree = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingBeInviteInfo} returns this
 */
proto.MsgMeetingBeInviteInfo.prototype.setIsagree = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingBeInvitedReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingBeInvitedReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingBeInvitedReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingBeInvitedReq.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingBeInvitedReq}
 */
proto.C2SGetMeetingBeInvitedReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingBeInvitedReq;
  return proto.C2SGetMeetingBeInvitedReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingBeInvitedReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingBeInvitedReq}
 */
proto.C2SGetMeetingBeInvitedReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingBeInvitedReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingBeInvitedReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingBeInvitedReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingBeInvitedReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.S2CGetMeetingBeInvitedAck.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingBeInvitedAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingBeInvitedAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingBeInvitedAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingBeInvitedAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.MsgMeetingBeInviteInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingBeInvitedAck}
 */
proto.S2CGetMeetingBeInvitedAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingBeInvitedAck;
  return proto.S2CGetMeetingBeInvitedAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingBeInvitedAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingBeInvitedAck}
 */
proto.S2CGetMeetingBeInvitedAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgMeetingBeInviteInfo;
      reader.readMessage(value,proto.MsgMeetingBeInviteInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingBeInvitedAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingBeInvitedAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingBeInvitedAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingBeInvitedAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.MsgMeetingBeInviteInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingBeInvitedAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingBeInvitedAck} returns this
 */
proto.S2CGetMeetingBeInvitedAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MsgMeetingBeInviteInfo infos = 2;
 * @return {!Array<!proto.MsgMeetingBeInviteInfo>}
 */
proto.S2CGetMeetingBeInvitedAck.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.MsgMeetingBeInviteInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgMeetingBeInviteInfo, 2));
};


/**
 * @param {!Array<!proto.MsgMeetingBeInviteInfo>} value
 * @return {!proto.S2CGetMeetingBeInvitedAck} returns this
*/
proto.S2CGetMeetingBeInvitedAck.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MsgMeetingBeInviteInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingBeInviteInfo}
 */
proto.S2CGetMeetingBeInvitedAck.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MsgMeetingBeInviteInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingBeInvitedAck} returns this
 */
proto.S2CGetMeetingBeInvitedAck.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SAgreeMeetingInviteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SAgreeMeetingInviteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SAgreeMeetingInviteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SAgreeMeetingInviteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SAgreeMeetingInviteReq}
 */
proto.C2SAgreeMeetingInviteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SAgreeMeetingInviteReq;
  return proto.C2SAgreeMeetingInviteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SAgreeMeetingInviteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SAgreeMeetingInviteReq}
 */
proto.C2SAgreeMeetingInviteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SAgreeMeetingInviteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SAgreeMeetingInviteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SAgreeMeetingInviteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SAgreeMeetingInviteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 roleId = 1;
 * @return {number}
 */
proto.C2SAgreeMeetingInviteReq.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SAgreeMeetingInviteReq} returns this
 */
proto.C2SAgreeMeetingInviteReq.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.C2SAgreeMeetingInviteReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SAgreeMeetingInviteReq} returns this
 */
proto.C2SAgreeMeetingInviteReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CAgreeMeetingInviteAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CAgreeMeetingInviteAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CAgreeMeetingInviteAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CAgreeMeetingInviteAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CAgreeMeetingInviteAck}
 */
proto.S2CAgreeMeetingInviteAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CAgreeMeetingInviteAck;
  return proto.S2CAgreeMeetingInviteAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CAgreeMeetingInviteAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CAgreeMeetingInviteAck}
 */
proto.S2CAgreeMeetingInviteAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CAgreeMeetingInviteAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CAgreeMeetingInviteAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CAgreeMeetingInviteAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CAgreeMeetingInviteAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CAgreeMeetingInviteAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CAgreeMeetingInviteAck} returns this
 */
proto.S2CAgreeMeetingInviteAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CAgreeMeetingInviteAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CAgreeMeetingInviteAck} returns this
 */
proto.S2CAgreeMeetingInviteAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SRefusedMeetingInviteReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SRefusedMeetingInviteReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SRefusedMeetingInviteReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SRefusedMeetingInviteReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SRefusedMeetingInviteReq}
 */
proto.C2SRefusedMeetingInviteReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SRefusedMeetingInviteReq;
  return proto.C2SRefusedMeetingInviteReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SRefusedMeetingInviteReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SRefusedMeetingInviteReq}
 */
proto.C2SRefusedMeetingInviteReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SRefusedMeetingInviteReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SRefusedMeetingInviteReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SRefusedMeetingInviteReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SRefusedMeetingInviteReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 roleId = 1;
 * @return {number}
 */
proto.C2SRefusedMeetingInviteReq.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SRefusedMeetingInviteReq} returns this
 */
proto.C2SRefusedMeetingInviteReq.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.C2SRefusedMeetingInviteReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SRefusedMeetingInviteReq} returns this
 */
proto.C2SRefusedMeetingInviteReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CRefusedMeetingInviteAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CRefusedMeetingInviteAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CRefusedMeetingInviteAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CRefusedMeetingInviteAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CRefusedMeetingInviteAck}
 */
proto.S2CRefusedMeetingInviteAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CRefusedMeetingInviteAck;
  return proto.S2CRefusedMeetingInviteAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CRefusedMeetingInviteAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CRefusedMeetingInviteAck}
 */
proto.S2CRefusedMeetingInviteAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CRefusedMeetingInviteAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CRefusedMeetingInviteAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CRefusedMeetingInviteAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CRefusedMeetingInviteAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CRefusedMeetingInviteAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CRefusedMeetingInviteAck} returns this
 */
proto.S2CRefusedMeetingInviteAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CRefusedMeetingInviteAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CRefusedMeetingInviteAck} returns this
 */
proto.S2CRefusedMeetingInviteAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgSpeakerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgSpeakerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgSpeakerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgSpeakerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    icon: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rolename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isspeaking: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgSpeakerInfo}
 */
proto.MsgSpeakerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgSpeakerInfo;
  return proto.MsgSpeakerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgSpeakerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgSpeakerInfo}
 */
proto.MsgSpeakerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIcon(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRolename(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsspeaking(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgSpeakerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgSpeakerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgSpeakerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgSpeakerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIcon();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRolename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsspeaking();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 roleId = 1;
 * @return {number}
 */
proto.MsgSpeakerInfo.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgSpeakerInfo} returns this
 */
proto.MsgSpeakerInfo.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 icon = 2;
 * @return {number}
 */
proto.MsgSpeakerInfo.prototype.getIcon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgSpeakerInfo} returns this
 */
proto.MsgSpeakerInfo.prototype.setIcon = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string roleName = 3;
 * @return {string}
 */
proto.MsgSpeakerInfo.prototype.getRolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgSpeakerInfo} returns this
 */
proto.MsgSpeakerInfo.prototype.setRolename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 isSpeaking = 4;
 * @return {number}
 */
proto.MsgSpeakerInfo.prototype.getIsspeaking = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgSpeakerInfo} returns this
 */
proto.MsgSpeakerInfo.prototype.setIsspeaking = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingSpeakerListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingSpeakerListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingSpeakerListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingSpeakerListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingSpeakerListReq}
 */
proto.C2SGetMeetingSpeakerListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingSpeakerListReq;
  return proto.C2SGetMeetingSpeakerListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingSpeakerListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingSpeakerListReq}
 */
proto.C2SGetMeetingSpeakerListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingSpeakerListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingSpeakerListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingSpeakerListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingSpeakerListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingSpeakerListReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingSpeakerListReq} returns this
 */
proto.C2SGetMeetingSpeakerListReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.S2CGetMeetingSpeakerListAck.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingSpeakerListAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingSpeakerListAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingSpeakerListAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingSpeakerListAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.MsgSpeakerInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingSpeakerListAck}
 */
proto.S2CGetMeetingSpeakerListAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingSpeakerListAck;
  return proto.S2CGetMeetingSpeakerListAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingSpeakerListAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingSpeakerListAck}
 */
proto.S2CGetMeetingSpeakerListAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgSpeakerInfo;
      reader.readMessage(value,proto.MsgSpeakerInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingSpeakerListAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingSpeakerListAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingSpeakerListAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingSpeakerListAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.MsgSpeakerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingSpeakerListAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingSpeakerListAck} returns this
 */
proto.S2CGetMeetingSpeakerListAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MsgSpeakerInfo infos = 2;
 * @return {!Array<!proto.MsgSpeakerInfo>}
 */
proto.S2CGetMeetingSpeakerListAck.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.MsgSpeakerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgSpeakerInfo, 2));
};


/**
 * @param {!Array<!proto.MsgSpeakerInfo>} value
 * @return {!proto.S2CGetMeetingSpeakerListAck} returns this
*/
proto.S2CGetMeetingSpeakerListAck.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MsgSpeakerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgSpeakerInfo}
 */
proto.S2CGetMeetingSpeakerListAck.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MsgSpeakerInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingSpeakerListAck} returns this
 */
proto.S2CGetMeetingSpeakerListAck.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SBeganToMeetingSpeakReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SBeganToMeetingSpeakReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SBeganToMeetingSpeakReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SBeganToMeetingSpeakReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SBeganToMeetingSpeakReq}
 */
proto.C2SBeganToMeetingSpeakReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SBeganToMeetingSpeakReq;
  return proto.C2SBeganToMeetingSpeakReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SBeganToMeetingSpeakReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SBeganToMeetingSpeakReq}
 */
proto.C2SBeganToMeetingSpeakReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SBeganToMeetingSpeakReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SBeganToMeetingSpeakReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SBeganToMeetingSpeakReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SBeganToMeetingSpeakReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SBeganToMeetingSpeakReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SBeganToMeetingSpeakReq} returns this
 */
proto.C2SBeganToMeetingSpeakReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.C2SBeganToMeetingSpeakReq.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SBeganToMeetingSpeakReq} returns this
 */
proto.C2SBeganToMeetingSpeakReq.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CBeganToMeetingSpeakAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CBeganToMeetingSpeakAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CBeganToMeetingSpeakAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CBeganToMeetingSpeakAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CBeganToMeetingSpeakAck}
 */
proto.S2CBeganToMeetingSpeakAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CBeganToMeetingSpeakAck;
  return proto.S2CBeganToMeetingSpeakAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CBeganToMeetingSpeakAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CBeganToMeetingSpeakAck}
 */
proto.S2CBeganToMeetingSpeakAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CBeganToMeetingSpeakAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CBeganToMeetingSpeakAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CBeganToMeetingSpeakAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CBeganToMeetingSpeakAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CBeganToMeetingSpeakAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CBeganToMeetingSpeakAck} returns this
 */
proto.S2CBeganToMeetingSpeakAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.S2CBeganToMeetingSpeakAck.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CBeganToMeetingSpeakAck} returns this
 */
proto.S2CBeganToMeetingSpeakAck.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SPromptMeetingSpeakerReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SPromptMeetingSpeakerReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SPromptMeetingSpeakerReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SPromptMeetingSpeakerReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    prompttime: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SPromptMeetingSpeakerReq}
 */
proto.C2SPromptMeetingSpeakerReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SPromptMeetingSpeakerReq;
  return proto.C2SPromptMeetingSpeakerReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SPromptMeetingSpeakerReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SPromptMeetingSpeakerReq}
 */
proto.C2SPromptMeetingSpeakerReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrompttime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SPromptMeetingSpeakerReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SPromptMeetingSpeakerReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SPromptMeetingSpeakerReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SPromptMeetingSpeakerReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPrompttime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SPromptMeetingSpeakerReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SPromptMeetingSpeakerReq} returns this
 */
proto.C2SPromptMeetingSpeakerReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.C2SPromptMeetingSpeakerReq.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SPromptMeetingSpeakerReq} returns this
 */
proto.C2SPromptMeetingSpeakerReq.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 promptTime = 3;
 * @return {number}
 */
proto.C2SPromptMeetingSpeakerReq.prototype.getPrompttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SPromptMeetingSpeakerReq} returns this
 */
proto.C2SPromptMeetingSpeakerReq.prototype.setPrompttime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CPromptMeetingSpeakerAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CPromptMeetingSpeakerAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CPromptMeetingSpeakerAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CPromptMeetingSpeakerAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    prompttime: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CPromptMeetingSpeakerAck}
 */
proto.S2CPromptMeetingSpeakerAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CPromptMeetingSpeakerAck;
  return proto.S2CPromptMeetingSpeakerAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CPromptMeetingSpeakerAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CPromptMeetingSpeakerAck}
 */
proto.S2CPromptMeetingSpeakerAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrompttime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CPromptMeetingSpeakerAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CPromptMeetingSpeakerAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CPromptMeetingSpeakerAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CPromptMeetingSpeakerAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPrompttime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CPromptMeetingSpeakerAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CPromptMeetingSpeakerAck} returns this
 */
proto.S2CPromptMeetingSpeakerAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.S2CPromptMeetingSpeakerAck.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CPromptMeetingSpeakerAck} returns this
 */
proto.S2CPromptMeetingSpeakerAck.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 promptTime = 3;
 * @return {number}
 */
proto.S2CPromptMeetingSpeakerAck.prototype.getPrompttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CPromptMeetingSpeakerAck} returns this
 */
proto.S2CPromptMeetingSpeakerAck.prototype.setPrompttime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgAttendeeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgAttendeeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgAttendeeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgAttendeeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    icon: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rolename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isbanned: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    actiontype: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgAttendeeInfo}
 */
proto.MsgAttendeeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgAttendeeInfo;
  return proto.MsgAttendeeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgAttendeeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgAttendeeInfo}
 */
proto.MsgAttendeeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIcon(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRolename(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsbanned(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActiontype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgAttendeeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgAttendeeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgAttendeeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgAttendeeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIcon();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRolename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsbanned();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getActiontype();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 roleId = 1;
 * @return {number}
 */
proto.MsgAttendeeInfo.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgAttendeeInfo} returns this
 */
proto.MsgAttendeeInfo.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 icon = 2;
 * @return {number}
 */
proto.MsgAttendeeInfo.prototype.getIcon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgAttendeeInfo} returns this
 */
proto.MsgAttendeeInfo.prototype.setIcon = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string roleName = 3;
 * @return {string}
 */
proto.MsgAttendeeInfo.prototype.getRolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgAttendeeInfo} returns this
 */
proto.MsgAttendeeInfo.prototype.setRolename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool isBanned = 4;
 * @return {boolean}
 */
proto.MsgAttendeeInfo.prototype.getIsbanned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.MsgAttendeeInfo} returns this
 */
proto.MsgAttendeeInfo.prototype.setIsbanned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 actionType = 5;
 * @return {number}
 */
proto.MsgAttendeeInfo.prototype.getActiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgAttendeeInfo} returns this
 */
proto.MsgAttendeeInfo.prototype.setActiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingAttendeeListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingAttendeeListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingAttendeeListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingAttendeeListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingAttendeeListReq}
 */
proto.C2SGetMeetingAttendeeListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingAttendeeListReq;
  return proto.C2SGetMeetingAttendeeListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingAttendeeListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingAttendeeListReq}
 */
proto.C2SGetMeetingAttendeeListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingAttendeeListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingAttendeeListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingAttendeeListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingAttendeeListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingAttendeeListReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingAttendeeListReq} returns this
 */
proto.C2SGetMeetingAttendeeListReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.S2CGetMeetingAttendeeListAck.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingAttendeeListAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingAttendeeListAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingAttendeeListAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingAttendeeListAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.MsgAttendeeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingAttendeeListAck}
 */
proto.S2CGetMeetingAttendeeListAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingAttendeeListAck;
  return proto.S2CGetMeetingAttendeeListAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingAttendeeListAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingAttendeeListAck}
 */
proto.S2CGetMeetingAttendeeListAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgAttendeeInfo;
      reader.readMessage(value,proto.MsgAttendeeInfo.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingAttendeeListAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingAttendeeListAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingAttendeeListAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingAttendeeListAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.MsgAttendeeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingAttendeeListAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingAttendeeListAck} returns this
 */
proto.S2CGetMeetingAttendeeListAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated MsgAttendeeInfo infos = 2;
 * @return {!Array<!proto.MsgAttendeeInfo>}
 */
proto.S2CGetMeetingAttendeeListAck.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.MsgAttendeeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgAttendeeInfo, 2));
};


/**
 * @param {!Array<!proto.MsgAttendeeInfo>} value
 * @return {!proto.S2CGetMeetingAttendeeListAck} returns this
*/
proto.S2CGetMeetingAttendeeListAck.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MsgAttendeeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgAttendeeInfo}
 */
proto.S2CGetMeetingAttendeeListAck.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MsgAttendeeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingAttendeeListAck} returns this
 */
proto.S2CGetMeetingAttendeeListAck.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SMeetingAttendeeBannedReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SMeetingAttendeeBannedReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SMeetingAttendeeBannedReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingAttendeeBannedReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roleid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    opttype: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SMeetingAttendeeBannedReq}
 */
proto.C2SMeetingAttendeeBannedReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SMeetingAttendeeBannedReq;
  return proto.C2SMeetingAttendeeBannedReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SMeetingAttendeeBannedReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SMeetingAttendeeBannedReq}
 */
proto.C2SMeetingAttendeeBannedReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpttype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SMeetingAttendeeBannedReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SMeetingAttendeeBannedReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SMeetingAttendeeBannedReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingAttendeeBannedReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOpttype();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SMeetingAttendeeBannedReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingAttendeeBannedReq} returns this
 */
proto.C2SMeetingAttendeeBannedReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 roleId = 2;
 * @return {number}
 */
proto.C2SMeetingAttendeeBannedReq.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingAttendeeBannedReq} returns this
 */
proto.C2SMeetingAttendeeBannedReq.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 optType = 3;
 * @return {number}
 */
proto.C2SMeetingAttendeeBannedReq.prototype.getOpttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingAttendeeBannedReq} returns this
 */
proto.C2SMeetingAttendeeBannedReq.prototype.setOpttype = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CMeetingAttendeeBannedAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CMeetingAttendeeBannedAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CMeetingAttendeeBannedAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingAttendeeBannedAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    opttype: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CMeetingAttendeeBannedAck}
 */
proto.S2CMeetingAttendeeBannedAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CMeetingAttendeeBannedAck;
  return proto.S2CMeetingAttendeeBannedAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CMeetingAttendeeBannedAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CMeetingAttendeeBannedAck}
 */
proto.S2CMeetingAttendeeBannedAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpttype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CMeetingAttendeeBannedAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CMeetingAttendeeBannedAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CMeetingAttendeeBannedAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingAttendeeBannedAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getOpttype();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CMeetingAttendeeBannedAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingAttendeeBannedAck} returns this
 */
proto.S2CMeetingAttendeeBannedAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CMeetingAttendeeBannedAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingAttendeeBannedAck} returns this
 */
proto.S2CMeetingAttendeeBannedAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 roleId = 3;
 * @return {number}
 */
proto.S2CMeetingAttendeeBannedAck.prototype.getRoleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingAttendeeBannedAck} returns this
 */
proto.S2CMeetingAttendeeBannedAck.prototype.setRoleid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 optType = 4;
 * @return {number}
 */
proto.S2CMeetingAttendeeBannedAck.prototype.getOpttype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingAttendeeBannedAck} returns this
 */
proto.S2CMeetingAttendeeBannedAck.prototype.setOpttype = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingScoreRoleNum.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingScoreRoleNum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingScoreRoleNum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingScoreRoleNum.toObject = function(includeInstance, msg) {
  var f, obj = {
    star1rolenum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    star2rolenum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    star3rolenum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    star4rolenum: jspb.Message.getFieldWithDefault(msg, 4, 0),
    star5rolenum: jspb.Message.getFieldWithDefault(msg, 5, 0),
    totalrolenum: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingScoreRoleNum}
 */
proto.MsgMeetingScoreRoleNum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingScoreRoleNum;
  return proto.MsgMeetingScoreRoleNum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingScoreRoleNum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingScoreRoleNum}
 */
proto.MsgMeetingScoreRoleNum.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStar1rolenum(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStar2rolenum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStar3rolenum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStar4rolenum(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStar5rolenum(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalrolenum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingScoreRoleNum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingScoreRoleNum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingScoreRoleNum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingScoreRoleNum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStar1rolenum();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStar2rolenum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStar3rolenum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStar4rolenum();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getStar5rolenum();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTotalrolenum();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 Star1RoleNum = 1;
 * @return {number}
 */
proto.MsgMeetingScoreRoleNum.prototype.getStar1rolenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingScoreRoleNum} returns this
 */
proto.MsgMeetingScoreRoleNum.prototype.setStar1rolenum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Star2RoleNum = 2;
 * @return {number}
 */
proto.MsgMeetingScoreRoleNum.prototype.getStar2rolenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingScoreRoleNum} returns this
 */
proto.MsgMeetingScoreRoleNum.prototype.setStar2rolenum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 Star3RoleNum = 3;
 * @return {number}
 */
proto.MsgMeetingScoreRoleNum.prototype.getStar3rolenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingScoreRoleNum} returns this
 */
proto.MsgMeetingScoreRoleNum.prototype.setStar3rolenum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 Star4RoleNum = 4;
 * @return {number}
 */
proto.MsgMeetingScoreRoleNum.prototype.getStar4rolenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingScoreRoleNum} returns this
 */
proto.MsgMeetingScoreRoleNum.prototype.setStar4rolenum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 Star5RoleNum = 5;
 * @return {number}
 */
proto.MsgMeetingScoreRoleNum.prototype.getStar5rolenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingScoreRoleNum} returns this
 */
proto.MsgMeetingScoreRoleNum.prototype.setStar5rolenum = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 totalRoleNum = 6;
 * @return {number}
 */
proto.MsgMeetingScoreRoleNum.prototype.getTotalrolenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingScoreRoleNum} returns this
 */
proto.MsgMeetingScoreRoleNum.prototype.setTotalrolenum = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SMeetingScoreReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SMeetingScoreReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SMeetingScoreReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingScoreReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    star: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SMeetingScoreReq}
 */
proto.C2SMeetingScoreReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SMeetingScoreReq;
  return proto.C2SMeetingScoreReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SMeetingScoreReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SMeetingScoreReq}
 */
proto.C2SMeetingScoreReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SMeetingScoreReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SMeetingScoreReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SMeetingScoreReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingScoreReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStar();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SMeetingScoreReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingScoreReq} returns this
 */
proto.C2SMeetingScoreReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 star = 2;
 * @return {number}
 */
proto.C2SMeetingScoreReq.prototype.getStar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingScoreReq} returns this
 */
proto.C2SMeetingScoreReq.prototype.setStar = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CMeetingScoreAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CMeetingScoreAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CMeetingScoreAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingScoreAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    star: jspb.Message.getFieldWithDefault(msg, 3, 0),
    score: jspb.Message.getFieldWithDefault(msg, 4, 0),
    rolenum: (f = msg.getRolenum()) && proto.MsgMeetingScoreRoleNum.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CMeetingScoreAck}
 */
proto.S2CMeetingScoreAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CMeetingScoreAck;
  return proto.S2CMeetingScoreAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CMeetingScoreAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CMeetingScoreAck}
 */
proto.S2CMeetingScoreAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStar(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 5:
      var value = new proto.MsgMeetingScoreRoleNum;
      reader.readMessage(value,proto.MsgMeetingScoreRoleNum.deserializeBinaryFromReader);
      msg.setRolenum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CMeetingScoreAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CMeetingScoreAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CMeetingScoreAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingScoreAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStar();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getRolenum();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.MsgMeetingScoreRoleNum.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CMeetingScoreAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingScoreAck} returns this
 */
proto.S2CMeetingScoreAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CMeetingScoreAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingScoreAck} returns this
 */
proto.S2CMeetingScoreAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 star = 3;
 * @return {number}
 */
proto.S2CMeetingScoreAck.prototype.getStar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingScoreAck} returns this
 */
proto.S2CMeetingScoreAck.prototype.setStar = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 score = 4;
 * @return {number}
 */
proto.S2CMeetingScoreAck.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingScoreAck} returns this
 */
proto.S2CMeetingScoreAck.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional MsgMeetingScoreRoleNum roleNum = 5;
 * @return {?proto.MsgMeetingScoreRoleNum}
 */
proto.S2CMeetingScoreAck.prototype.getRolenum = function() {
  return /** @type{?proto.MsgMeetingScoreRoleNum} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingScoreRoleNum, 5));
};


/**
 * @param {?proto.MsgMeetingScoreRoleNum|undefined} value
 * @return {!proto.S2CMeetingScoreAck} returns this
*/
proto.S2CMeetingScoreAck.prototype.setRolenum = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CMeetingScoreAck} returns this
 */
proto.S2CMeetingScoreAck.prototype.clearRolenum = function() {
  return this.setRolenum(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CMeetingScoreAck.prototype.hasRolenum = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingScoreInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingScoreInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingScoreInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingScoreInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingScoreInfoReq}
 */
proto.C2SGetMeetingScoreInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingScoreInfoReq;
  return proto.C2SGetMeetingScoreInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingScoreInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingScoreInfoReq}
 */
proto.C2SGetMeetingScoreInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingScoreInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingScoreInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingScoreInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingScoreInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingScoreInfoReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingScoreInfoReq} returns this
 */
proto.C2SGetMeetingScoreInfoReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingScoreInfoAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingScoreInfoAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingScoreInfoAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingScoreInfoAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    star: jspb.Message.getFieldWithDefault(msg, 3, 0),
    score: jspb.Message.getFieldWithDefault(msg, 4, 0),
    alreadyStar: jspb.Message.getFieldWithDefault(msg, 5, 0),
    rolenum: (f = msg.getRolenum()) && proto.MsgMeetingScoreRoleNum.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingScoreInfoAck}
 */
proto.S2CGetMeetingScoreInfoAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingScoreInfoAck;
  return proto.S2CGetMeetingScoreInfoAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingScoreInfoAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingScoreInfoAck}
 */
proto.S2CGetMeetingScoreInfoAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStar(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setScore(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAlreadyStar(value);
      break;
    case 6:
      var value = new proto.MsgMeetingScoreRoleNum;
      reader.readMessage(value,proto.MsgMeetingScoreRoleNum.deserializeBinaryFromReader);
      msg.setRolenum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingScoreInfoAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingScoreInfoAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingScoreInfoAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingScoreInfoAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStar();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAlreadyStar();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getRolenum();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.MsgMeetingScoreRoleNum.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingScoreInfoAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingScoreInfoAck} returns this
 */
proto.S2CGetMeetingScoreInfoAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CGetMeetingScoreInfoAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CGetMeetingScoreInfoAck} returns this
 */
proto.S2CGetMeetingScoreInfoAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 star = 3;
 * @return {number}
 */
proto.S2CGetMeetingScoreInfoAck.prototype.getStar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingScoreInfoAck} returns this
 */
proto.S2CGetMeetingScoreInfoAck.prototype.setStar = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 score = 4;
 * @return {number}
 */
proto.S2CGetMeetingScoreInfoAck.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingScoreInfoAck} returns this
 */
proto.S2CGetMeetingScoreInfoAck.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 already_star = 5;
 * @return {number}
 */
proto.S2CGetMeetingScoreInfoAck.prototype.getAlreadyStar = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingScoreInfoAck} returns this
 */
proto.S2CGetMeetingScoreInfoAck.prototype.setAlreadyStar = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional MsgMeetingScoreRoleNum roleNum = 6;
 * @return {?proto.MsgMeetingScoreRoleNum}
 */
proto.S2CGetMeetingScoreInfoAck.prototype.getRolenum = function() {
  return /** @type{?proto.MsgMeetingScoreRoleNum} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingScoreRoleNum, 6));
};


/**
 * @param {?proto.MsgMeetingScoreRoleNum|undefined} value
 * @return {!proto.S2CGetMeetingScoreInfoAck} returns this
*/
proto.S2CGetMeetingScoreInfoAck.prototype.setRolenum = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CGetMeetingScoreInfoAck} returns this
 */
proto.S2CGetMeetingScoreInfoAck.prototype.clearRolenum = function() {
  return this.setRolenum(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CGetMeetingScoreInfoAck.prototype.hasRolenum = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingInfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingInfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingInfoReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingInfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingInfoReq}
 */
proto.C2SGetMeetingInfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingInfoReq;
  return proto.C2SGetMeetingInfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingInfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingInfoReq}
 */
proto.C2SGetMeetingInfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingInfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingInfoReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingInfoReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingInfoReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingInfoReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingInfoReq} returns this
 */
proto.C2SGetMeetingInfoReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingInfoAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingInfoAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingInfoAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingInfoAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.MsgMeetingInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingInfoAck}
 */
proto.S2CGetMeetingInfoAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingInfoAck;
  return proto.S2CGetMeetingInfoAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingInfoAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingInfoAck}
 */
proto.S2CGetMeetingInfoAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgMeetingInfo;
      reader.readMessage(value,proto.MsgMeetingInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingInfoAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingInfoAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingInfoAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingInfoAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MsgMeetingInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingInfoAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingInfoAck} returns this
 */
proto.S2CGetMeetingInfoAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MsgMeetingInfo info = 2;
 * @return {?proto.MsgMeetingInfo}
 */
proto.S2CGetMeetingInfoAck.prototype.getInfo = function() {
  return /** @type{?proto.MsgMeetingInfo} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingInfo, 2));
};


/**
 * @param {?proto.MsgMeetingInfo|undefined} value
 * @return {!proto.S2CGetMeetingInfoAck} returns this
*/
proto.S2CGetMeetingInfoAck.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CGetMeetingInfoAck} returns this
 */
proto.S2CGetMeetingInfoAck.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CGetMeetingInfoAck.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SExtendMeetingTimeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SExtendMeetingTimeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SExtendMeetingTimeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SExtendMeetingTimeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    endtime: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SExtendMeetingTimeReq}
 */
proto.C2SExtendMeetingTimeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SExtendMeetingTimeReq;
  return proto.C2SExtendMeetingTimeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SExtendMeetingTimeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SExtendMeetingTimeReq}
 */
proto.C2SExtendMeetingTimeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SExtendMeetingTimeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SExtendMeetingTimeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SExtendMeetingTimeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SExtendMeetingTimeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEndtime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SExtendMeetingTimeReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SExtendMeetingTimeReq} returns this
 */
proto.C2SExtendMeetingTimeReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 endTime = 2;
 * @return {number}
 */
proto.C2SExtendMeetingTimeReq.prototype.getEndtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SExtendMeetingTimeReq} returns this
 */
proto.C2SExtendMeetingTimeReq.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CExtendMeetingTimeAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CExtendMeetingTimeAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CExtendMeetingTimeAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CExtendMeetingTimeAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CExtendMeetingTimeAck}
 */
proto.S2CExtendMeetingTimeAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CExtendMeetingTimeAck;
  return proto.S2CExtendMeetingTimeAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CExtendMeetingTimeAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CExtendMeetingTimeAck}
 */
proto.S2CExtendMeetingTimeAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CExtendMeetingTimeAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CExtendMeetingTimeAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CExtendMeetingTimeAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CExtendMeetingTimeAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CExtendMeetingTimeAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CExtendMeetingTimeAck} returns this
 */
proto.S2CExtendMeetingTimeAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingStatisticBefore.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingStatisticBefore.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingStatisticBefore} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingStatisticBefore.toObject = function(includeInstance, msg) {
  var f, obj = {
    speaker: (f = msg.getSpeaker()) && proto.MsgMeetingStatisticBefore.MsgBeforeUnit.toObject(includeInstance, f),
    seata: (f = msg.getSeata()) && proto.MsgMeetingStatisticBefore.MsgBeforeUnit.toObject(includeInstance, f),
    seatb: (f = msg.getSeatb()) && proto.MsgMeetingStatisticBefore.MsgBeforeUnit.toObject(includeInstance, f),
    seatc: (f = msg.getSeatc()) && proto.MsgMeetingStatisticBefore.MsgBeforeUnit.toObject(includeInstance, f),
    seatd: (f = msg.getSeatd()) && proto.MsgMeetingStatisticBefore.MsgBeforeUnit.toObject(includeInstance, f),
    audience: (f = msg.getAudience()) && proto.MsgMeetingStatisticBefore.MsgBeforeUnit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingStatisticBefore}
 */
proto.MsgMeetingStatisticBefore.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingStatisticBefore;
  return proto.MsgMeetingStatisticBefore.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingStatisticBefore} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingStatisticBefore}
 */
proto.MsgMeetingStatisticBefore.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MsgMeetingStatisticBefore.MsgBeforeUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticBefore.MsgBeforeUnit.deserializeBinaryFromReader);
      msg.setSpeaker(value);
      break;
    case 2:
      var value = new proto.MsgMeetingStatisticBefore.MsgBeforeUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticBefore.MsgBeforeUnit.deserializeBinaryFromReader);
      msg.setSeata(value);
      break;
    case 3:
      var value = new proto.MsgMeetingStatisticBefore.MsgBeforeUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticBefore.MsgBeforeUnit.deserializeBinaryFromReader);
      msg.setSeatb(value);
      break;
    case 4:
      var value = new proto.MsgMeetingStatisticBefore.MsgBeforeUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticBefore.MsgBeforeUnit.deserializeBinaryFromReader);
      msg.setSeatc(value);
      break;
    case 5:
      var value = new proto.MsgMeetingStatisticBefore.MsgBeforeUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticBefore.MsgBeforeUnit.deserializeBinaryFromReader);
      msg.setSeatd(value);
      break;
    case 6:
      var value = new proto.MsgMeetingStatisticBefore.MsgBeforeUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticBefore.MsgBeforeUnit.deserializeBinaryFromReader);
      msg.setAudience(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingStatisticBefore.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingStatisticBefore.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingStatisticBefore} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingStatisticBefore.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeaker();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MsgMeetingStatisticBefore.MsgBeforeUnit.serializeBinaryToWriter
    );
  }
  f = message.getSeata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MsgMeetingStatisticBefore.MsgBeforeUnit.serializeBinaryToWriter
    );
  }
  f = message.getSeatb();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MsgMeetingStatisticBefore.MsgBeforeUnit.serializeBinaryToWriter
    );
  }
  f = message.getSeatc();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.MsgMeetingStatisticBefore.MsgBeforeUnit.serializeBinaryToWriter
    );
  }
  f = message.getSeatd();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.MsgMeetingStatisticBefore.MsgBeforeUnit.serializeBinaryToWriter
    );
  }
  f = message.getAudience();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.MsgMeetingStatisticBefore.MsgBeforeUnit.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingStatisticBefore.MsgBeforeUnit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.toObject = function(includeInstance, msg) {
  var f, obj = {
    invite0: jspb.Message.getFieldWithDefault(msg, 1, 0),
    invite1: jspb.Message.getFieldWithDefault(msg, 2, 0),
    invite2: jspb.Message.getFieldWithDefault(msg, 3, 0),
    apply0: jspb.Message.getFieldWithDefault(msg, 4, 0),
    apply1: jspb.Message.getFieldWithDefault(msg, 5, 0),
    apply2: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ticket: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingStatisticBefore.MsgBeforeUnit;
  return proto.MsgMeetingStatisticBefore.MsgBeforeUnit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInvite0(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInvite1(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInvite2(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApply0(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApply1(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApply2(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTicket(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingStatisticBefore.MsgBeforeUnit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvite0();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInvite1();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInvite2();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getApply0();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getApply1();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getApply2();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getTicket();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int32 invite0 = 1;
 * @return {number}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.getInvite0 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit} returns this
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.setInvite0 = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 invite1 = 2;
 * @return {number}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.getInvite1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit} returns this
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.setInvite1 = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 invite2 = 3;
 * @return {number}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.getInvite2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit} returns this
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.setInvite2 = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 apply0 = 4;
 * @return {number}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.getApply0 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit} returns this
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.setApply0 = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 apply1 = 5;
 * @return {number}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.getApply1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit} returns this
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.setApply1 = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 apply2 = 6;
 * @return {number}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.getApply2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit} returns this
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.setApply2 = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 ticket = 7;
 * @return {number}
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.getTicket = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingStatisticBefore.MsgBeforeUnit} returns this
 */
proto.MsgMeetingStatisticBefore.MsgBeforeUnit.prototype.setTicket = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional MsgBeforeUnit speaker = 1;
 * @return {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit}
 */
proto.MsgMeetingStatisticBefore.prototype.getSpeaker = function() {
  return /** @type{?proto.MsgMeetingStatisticBefore.MsgBeforeUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticBefore.MsgBeforeUnit, 1));
};


/**
 * @param {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticBefore} returns this
*/
proto.MsgMeetingStatisticBefore.prototype.setSpeaker = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticBefore} returns this
 */
proto.MsgMeetingStatisticBefore.prototype.clearSpeaker = function() {
  return this.setSpeaker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticBefore.prototype.hasSpeaker = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MsgBeforeUnit seatA = 2;
 * @return {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit}
 */
proto.MsgMeetingStatisticBefore.prototype.getSeata = function() {
  return /** @type{?proto.MsgMeetingStatisticBefore.MsgBeforeUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticBefore.MsgBeforeUnit, 2));
};


/**
 * @param {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticBefore} returns this
*/
proto.MsgMeetingStatisticBefore.prototype.setSeata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticBefore} returns this
 */
proto.MsgMeetingStatisticBefore.prototype.clearSeata = function() {
  return this.setSeata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticBefore.prototype.hasSeata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MsgBeforeUnit seatB = 3;
 * @return {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit}
 */
proto.MsgMeetingStatisticBefore.prototype.getSeatb = function() {
  return /** @type{?proto.MsgMeetingStatisticBefore.MsgBeforeUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticBefore.MsgBeforeUnit, 3));
};


/**
 * @param {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticBefore} returns this
*/
proto.MsgMeetingStatisticBefore.prototype.setSeatb = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticBefore} returns this
 */
proto.MsgMeetingStatisticBefore.prototype.clearSeatb = function() {
  return this.setSeatb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticBefore.prototype.hasSeatb = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MsgBeforeUnit seatC = 4;
 * @return {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit}
 */
proto.MsgMeetingStatisticBefore.prototype.getSeatc = function() {
  return /** @type{?proto.MsgMeetingStatisticBefore.MsgBeforeUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticBefore.MsgBeforeUnit, 4));
};


/**
 * @param {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticBefore} returns this
*/
proto.MsgMeetingStatisticBefore.prototype.setSeatc = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticBefore} returns this
 */
proto.MsgMeetingStatisticBefore.prototype.clearSeatc = function() {
  return this.setSeatc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticBefore.prototype.hasSeatc = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MsgBeforeUnit seatD = 5;
 * @return {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit}
 */
proto.MsgMeetingStatisticBefore.prototype.getSeatd = function() {
  return /** @type{?proto.MsgMeetingStatisticBefore.MsgBeforeUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticBefore.MsgBeforeUnit, 5));
};


/**
 * @param {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticBefore} returns this
*/
proto.MsgMeetingStatisticBefore.prototype.setSeatd = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticBefore} returns this
 */
proto.MsgMeetingStatisticBefore.prototype.clearSeatd = function() {
  return this.setSeatd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticBefore.prototype.hasSeatd = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MsgBeforeUnit audience = 6;
 * @return {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit}
 */
proto.MsgMeetingStatisticBefore.prototype.getAudience = function() {
  return /** @type{?proto.MsgMeetingStatisticBefore.MsgBeforeUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticBefore.MsgBeforeUnit, 6));
};


/**
 * @param {?proto.MsgMeetingStatisticBefore.MsgBeforeUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticBefore} returns this
*/
proto.MsgMeetingStatisticBefore.prototype.setAudience = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticBefore} returns this
 */
proto.MsgMeetingStatisticBefore.prototype.clearAudience = function() {
  return this.setAudience(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticBefore.prototype.hasAudience = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingStatisticBeforeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingStatisticBeforeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingStatisticBeforeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingStatisticBeforeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingStatisticBeforeReq}
 */
proto.C2SGetMeetingStatisticBeforeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingStatisticBeforeReq;
  return proto.C2SGetMeetingStatisticBeforeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingStatisticBeforeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingStatisticBeforeReq}
 */
proto.C2SGetMeetingStatisticBeforeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingStatisticBeforeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingStatisticBeforeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingStatisticBeforeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingStatisticBeforeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingStatisticBeforeReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingStatisticBeforeReq} returns this
 */
proto.C2SGetMeetingStatisticBeforeReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingStatisticBeforeAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingStatisticBeforeAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingStatisticBeforeAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingStatisticBeforeAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    statistic: (f = msg.getStatistic()) && proto.MsgMeetingStatisticBefore.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingStatisticBeforeAck}
 */
proto.S2CGetMeetingStatisticBeforeAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingStatisticBeforeAck;
  return proto.S2CGetMeetingStatisticBeforeAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingStatisticBeforeAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingStatisticBeforeAck}
 */
proto.S2CGetMeetingStatisticBeforeAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 3:
      var value = new proto.MsgMeetingStatisticBefore;
      reader.readMessage(value,proto.MsgMeetingStatisticBefore.deserializeBinaryFromReader);
      msg.setStatistic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingStatisticBeforeAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingStatisticBeforeAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingStatisticBeforeAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingStatisticBeforeAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatistic();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MsgMeetingStatisticBefore.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingStatisticBeforeAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingStatisticBeforeAck} returns this
 */
proto.S2CGetMeetingStatisticBeforeAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CGetMeetingStatisticBeforeAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CGetMeetingStatisticBeforeAck} returns this
 */
proto.S2CGetMeetingStatisticBeforeAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional MsgMeetingStatisticBefore statistic = 3;
 * @return {?proto.MsgMeetingStatisticBefore}
 */
proto.S2CGetMeetingStatisticBeforeAck.prototype.getStatistic = function() {
  return /** @type{?proto.MsgMeetingStatisticBefore} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticBefore, 3));
};


/**
 * @param {?proto.MsgMeetingStatisticBefore|undefined} value
 * @return {!proto.S2CGetMeetingStatisticBeforeAck} returns this
*/
proto.S2CGetMeetingStatisticBeforeAck.prototype.setStatistic = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CGetMeetingStatisticBeforeAck} returns this
 */
proto.S2CGetMeetingStatisticBeforeAck.prototype.clearStatistic = function() {
  return this.setStatistic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CGetMeetingStatisticBeforeAck.prototype.hasStatistic = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingStatisticAfter.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingStatisticAfter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingStatisticAfter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingStatisticAfter.toObject = function(includeInstance, msg) {
  var f, obj = {
    speaker: (f = msg.getSpeaker()) && proto.MsgMeetingStatisticAfter.MsgAfterUnit.toObject(includeInstance, f),
    seata: (f = msg.getSeata()) && proto.MsgMeetingStatisticAfter.MsgAfterUnit.toObject(includeInstance, f),
    seatb: (f = msg.getSeatb()) && proto.MsgMeetingStatisticAfter.MsgAfterUnit.toObject(includeInstance, f),
    seatc: (f = msg.getSeatc()) && proto.MsgMeetingStatisticAfter.MsgAfterUnit.toObject(includeInstance, f),
    seatd: (f = msg.getSeatd()) && proto.MsgMeetingStatisticAfter.MsgAfterUnit.toObject(includeInstance, f),
    audience: (f = msg.getAudience()) && proto.MsgMeetingStatisticAfter.MsgAfterUnit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingStatisticAfter}
 */
proto.MsgMeetingStatisticAfter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingStatisticAfter;
  return proto.MsgMeetingStatisticAfter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingStatisticAfter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingStatisticAfter}
 */
proto.MsgMeetingStatisticAfter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MsgMeetingStatisticAfter.MsgAfterUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticAfter.MsgAfterUnit.deserializeBinaryFromReader);
      msg.setSpeaker(value);
      break;
    case 2:
      var value = new proto.MsgMeetingStatisticAfter.MsgAfterUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticAfter.MsgAfterUnit.deserializeBinaryFromReader);
      msg.setSeata(value);
      break;
    case 3:
      var value = new proto.MsgMeetingStatisticAfter.MsgAfterUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticAfter.MsgAfterUnit.deserializeBinaryFromReader);
      msg.setSeatb(value);
      break;
    case 4:
      var value = new proto.MsgMeetingStatisticAfter.MsgAfterUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticAfter.MsgAfterUnit.deserializeBinaryFromReader);
      msg.setSeatc(value);
      break;
    case 5:
      var value = new proto.MsgMeetingStatisticAfter.MsgAfterUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticAfter.MsgAfterUnit.deserializeBinaryFromReader);
      msg.setSeatd(value);
      break;
    case 6:
      var value = new proto.MsgMeetingStatisticAfter.MsgAfterUnit;
      reader.readMessage(value,proto.MsgMeetingStatisticAfter.MsgAfterUnit.deserializeBinaryFromReader);
      msg.setAudience(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingStatisticAfter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingStatisticAfter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingStatisticAfter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingStatisticAfter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeaker();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MsgMeetingStatisticAfter.MsgAfterUnit.serializeBinaryToWriter
    );
  }
  f = message.getSeata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MsgMeetingStatisticAfter.MsgAfterUnit.serializeBinaryToWriter
    );
  }
  f = message.getSeatb();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MsgMeetingStatisticAfter.MsgAfterUnit.serializeBinaryToWriter
    );
  }
  f = message.getSeatc();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.MsgMeetingStatisticAfter.MsgAfterUnit.serializeBinaryToWriter
    );
  }
  f = message.getSeatd();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.MsgMeetingStatisticAfter.MsgAfterUnit.serializeBinaryToWriter
    );
  }
  f = message.getAudience();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.MsgMeetingStatisticAfter.MsgAfterUnit.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingStatisticAfter.MsgAfterUnit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingStatisticAfter.MsgAfterUnit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.toObject = function(includeInstance, msg) {
  var f, obj = {
    total: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actual: jspb.Message.getFieldWithDefault(msg, 2, 0),
    onlinemax: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingStatisticAfter.MsgAfterUnit}
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingStatisticAfter.MsgAfterUnit;
  return proto.MsgMeetingStatisticAfter.MsgAfterUnit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingStatisticAfter.MsgAfterUnit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingStatisticAfter.MsgAfterUnit}
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActual(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOnlinemax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingStatisticAfter.MsgAfterUnit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingStatisticAfter.MsgAfterUnit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getActual();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOnlinemax();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 total = 1;
 * @return {number}
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingStatisticAfter.MsgAfterUnit} returns this
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 actual = 2;
 * @return {number}
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.prototype.getActual = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingStatisticAfter.MsgAfterUnit} returns this
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.prototype.setActual = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 onlineMax = 3;
 * @return {number}
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.prototype.getOnlinemax = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingStatisticAfter.MsgAfterUnit} returns this
 */
proto.MsgMeetingStatisticAfter.MsgAfterUnit.prototype.setOnlinemax = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional MsgAfterUnit speaker = 1;
 * @return {?proto.MsgMeetingStatisticAfter.MsgAfterUnit}
 */
proto.MsgMeetingStatisticAfter.prototype.getSpeaker = function() {
  return /** @type{?proto.MsgMeetingStatisticAfter.MsgAfterUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticAfter.MsgAfterUnit, 1));
};


/**
 * @param {?proto.MsgMeetingStatisticAfter.MsgAfterUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticAfter} returns this
*/
proto.MsgMeetingStatisticAfter.prototype.setSpeaker = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticAfter} returns this
 */
proto.MsgMeetingStatisticAfter.prototype.clearSpeaker = function() {
  return this.setSpeaker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticAfter.prototype.hasSpeaker = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MsgAfterUnit seatA = 2;
 * @return {?proto.MsgMeetingStatisticAfter.MsgAfterUnit}
 */
proto.MsgMeetingStatisticAfter.prototype.getSeata = function() {
  return /** @type{?proto.MsgMeetingStatisticAfter.MsgAfterUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticAfter.MsgAfterUnit, 2));
};


/**
 * @param {?proto.MsgMeetingStatisticAfter.MsgAfterUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticAfter} returns this
*/
proto.MsgMeetingStatisticAfter.prototype.setSeata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticAfter} returns this
 */
proto.MsgMeetingStatisticAfter.prototype.clearSeata = function() {
  return this.setSeata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticAfter.prototype.hasSeata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MsgAfterUnit seatB = 3;
 * @return {?proto.MsgMeetingStatisticAfter.MsgAfterUnit}
 */
proto.MsgMeetingStatisticAfter.prototype.getSeatb = function() {
  return /** @type{?proto.MsgMeetingStatisticAfter.MsgAfterUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticAfter.MsgAfterUnit, 3));
};


/**
 * @param {?proto.MsgMeetingStatisticAfter.MsgAfterUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticAfter} returns this
*/
proto.MsgMeetingStatisticAfter.prototype.setSeatb = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticAfter} returns this
 */
proto.MsgMeetingStatisticAfter.prototype.clearSeatb = function() {
  return this.setSeatb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticAfter.prototype.hasSeatb = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MsgAfterUnit seatC = 4;
 * @return {?proto.MsgMeetingStatisticAfter.MsgAfterUnit}
 */
proto.MsgMeetingStatisticAfter.prototype.getSeatc = function() {
  return /** @type{?proto.MsgMeetingStatisticAfter.MsgAfterUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticAfter.MsgAfterUnit, 4));
};


/**
 * @param {?proto.MsgMeetingStatisticAfter.MsgAfterUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticAfter} returns this
*/
proto.MsgMeetingStatisticAfter.prototype.setSeatc = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticAfter} returns this
 */
proto.MsgMeetingStatisticAfter.prototype.clearSeatc = function() {
  return this.setSeatc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticAfter.prototype.hasSeatc = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MsgAfterUnit seatD = 5;
 * @return {?proto.MsgMeetingStatisticAfter.MsgAfterUnit}
 */
proto.MsgMeetingStatisticAfter.prototype.getSeatd = function() {
  return /** @type{?proto.MsgMeetingStatisticAfter.MsgAfterUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticAfter.MsgAfterUnit, 5));
};


/**
 * @param {?proto.MsgMeetingStatisticAfter.MsgAfterUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticAfter} returns this
*/
proto.MsgMeetingStatisticAfter.prototype.setSeatd = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticAfter} returns this
 */
proto.MsgMeetingStatisticAfter.prototype.clearSeatd = function() {
  return this.setSeatd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticAfter.prototype.hasSeatd = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MsgAfterUnit audience = 6;
 * @return {?proto.MsgMeetingStatisticAfter.MsgAfterUnit}
 */
proto.MsgMeetingStatisticAfter.prototype.getAudience = function() {
  return /** @type{?proto.MsgMeetingStatisticAfter.MsgAfterUnit} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticAfter.MsgAfterUnit, 6));
};


/**
 * @param {?proto.MsgMeetingStatisticAfter.MsgAfterUnit|undefined} value
 * @return {!proto.MsgMeetingStatisticAfter} returns this
*/
proto.MsgMeetingStatisticAfter.prototype.setAudience = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MsgMeetingStatisticAfter} returns this
 */
proto.MsgMeetingStatisticAfter.prototype.clearAudience = function() {
  return this.setAudience(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MsgMeetingStatisticAfter.prototype.hasAudience = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingStatisticAfterReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingStatisticAfterReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingStatisticAfterReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingStatisticAfterReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingStatisticAfterReq}
 */
proto.C2SGetMeetingStatisticAfterReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingStatisticAfterReq;
  return proto.C2SGetMeetingStatisticAfterReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingStatisticAfterReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingStatisticAfterReq}
 */
proto.C2SGetMeetingStatisticAfterReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingStatisticAfterReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingStatisticAfterReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingStatisticAfterReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingStatisticAfterReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingStatisticAfterReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingStatisticAfterReq} returns this
 */
proto.C2SGetMeetingStatisticAfterReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingStatisticAfterAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingStatisticAfterAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingStatisticAfterAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingStatisticAfterAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    statistic: (f = msg.getStatistic()) && proto.MsgMeetingStatisticAfter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingStatisticAfterAck}
 */
proto.S2CGetMeetingStatisticAfterAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingStatisticAfterAck;
  return proto.S2CGetMeetingStatisticAfterAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingStatisticAfterAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingStatisticAfterAck}
 */
proto.S2CGetMeetingStatisticAfterAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 3:
      var value = new proto.MsgMeetingStatisticAfter;
      reader.readMessage(value,proto.MsgMeetingStatisticAfter.deserializeBinaryFromReader);
      msg.setStatistic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingStatisticAfterAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingStatisticAfterAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingStatisticAfterAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingStatisticAfterAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatistic();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MsgMeetingStatisticAfter.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingStatisticAfterAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingStatisticAfterAck} returns this
 */
proto.S2CGetMeetingStatisticAfterAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CGetMeetingStatisticAfterAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CGetMeetingStatisticAfterAck} returns this
 */
proto.S2CGetMeetingStatisticAfterAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional MsgMeetingStatisticAfter statistic = 3;
 * @return {?proto.MsgMeetingStatisticAfter}
 */
proto.S2CGetMeetingStatisticAfterAck.prototype.getStatistic = function() {
  return /** @type{?proto.MsgMeetingStatisticAfter} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingStatisticAfter, 3));
};


/**
 * @param {?proto.MsgMeetingStatisticAfter|undefined} value
 * @return {!proto.S2CGetMeetingStatisticAfterAck} returns this
*/
proto.S2CGetMeetingStatisticAfterAck.prototype.setStatistic = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CGetMeetingStatisticAfterAck} returns this
 */
proto.S2CGetMeetingStatisticAfterAck.prototype.clearStatistic = function() {
  return this.setStatistic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CGetMeetingStatisticAfterAck.prototype.hasStatistic = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingEarning.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingEarning.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingEarning} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingEarning.toObject = function(includeInstance, msg) {
  var f, obj = {
    speaker: jspb.Message.getFieldWithDefault(msg, 1, 0),
    seata: jspb.Message.getFieldWithDefault(msg, 2, 0),
    seatb: jspb.Message.getFieldWithDefault(msg, 3, 0),
    seatc: jspb.Message.getFieldWithDefault(msg, 4, 0),
    seatd: jspb.Message.getFieldWithDefault(msg, 5, 0),
    audience: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingEarning}
 */
proto.MsgMeetingEarning.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingEarning;
  return proto.MsgMeetingEarning.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingEarning} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingEarning}
 */
proto.MsgMeetingEarning.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeaker(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeata(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatb(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatc(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSeatd(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAudience(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingEarning.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingEarning.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingEarning} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingEarning.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeaker();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSeata();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSeatb();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSeatc();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSeatd();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getAudience();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional int32 speaker = 1;
 * @return {number}
 */
proto.MsgMeetingEarning.prototype.getSpeaker = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingEarning} returns this
 */
proto.MsgMeetingEarning.prototype.setSpeaker = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 seatA = 2;
 * @return {number}
 */
proto.MsgMeetingEarning.prototype.getSeata = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingEarning} returns this
 */
proto.MsgMeetingEarning.prototype.setSeata = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 seatB = 3;
 * @return {number}
 */
proto.MsgMeetingEarning.prototype.getSeatb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingEarning} returns this
 */
proto.MsgMeetingEarning.prototype.setSeatb = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 seatC = 4;
 * @return {number}
 */
proto.MsgMeetingEarning.prototype.getSeatc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingEarning} returns this
 */
proto.MsgMeetingEarning.prototype.setSeatc = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 seatD = 5;
 * @return {number}
 */
proto.MsgMeetingEarning.prototype.getSeatd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingEarning} returns this
 */
proto.MsgMeetingEarning.prototype.setSeatd = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 audience = 6;
 * @return {number}
 */
proto.MsgMeetingEarning.prototype.getAudience = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingEarning} returns this
 */
proto.MsgMeetingEarning.prototype.setAudience = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingSpending.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingSpending.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingSpending} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingSpending.toObject = function(includeInstance, msg) {
  var f, obj = {
    place: jspb.Message.getFieldWithDefault(msg, 1, 0),
    extend: jspb.Message.getFieldWithDefault(msg, 2, 0),
    save: jspb.Message.getFieldWithDefault(msg, 3, 0),
    video: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingSpending}
 */
proto.MsgMeetingSpending.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingSpending;
  return proto.MsgMeetingSpending.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingSpending} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingSpending}
 */
proto.MsgMeetingSpending.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExtend(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSave(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVideo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingSpending.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingSpending.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingSpending} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingSpending.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlace();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getExtend();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSave();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getVideo();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 place = 1;
 * @return {number}
 */
proto.MsgMeetingSpending.prototype.getPlace = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpending} returns this
 */
proto.MsgMeetingSpending.prototype.setPlace = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 extend = 2;
 * @return {number}
 */
proto.MsgMeetingSpending.prototype.getExtend = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpending} returns this
 */
proto.MsgMeetingSpending.prototype.setExtend = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 save = 3;
 * @return {number}
 */
proto.MsgMeetingSpending.prototype.getSave = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpending} returns this
 */
proto.MsgMeetingSpending.prototype.setSave = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 video = 4;
 * @return {number}
 */
proto.MsgMeetingSpending.prototype.getVideo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingSpending} returns this
 */
proto.MsgMeetingSpending.prototype.setVideo = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingIoStatisticReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingIoStatisticReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingIoStatisticReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingIoStatisticReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingIoStatisticReq}
 */
proto.C2SGetMeetingIoStatisticReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingIoStatisticReq;
  return proto.C2SGetMeetingIoStatisticReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingIoStatisticReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingIoStatisticReq}
 */
proto.C2SGetMeetingIoStatisticReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingIoStatisticReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingIoStatisticReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingIoStatisticReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingIoStatisticReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingIoStatisticReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingIoStatisticReq} returns this
 */
proto.C2SGetMeetingIoStatisticReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingIoStatisticAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingIoStatisticAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingIoStatisticAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingIoStatisticAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    earning: (f = msg.getEarning()) && proto.MsgMeetingEarning.toObject(includeInstance, f),
    spending: (f = msg.getSpending()) && proto.MsgMeetingSpending.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingIoStatisticAck}
 */
proto.S2CGetMeetingIoStatisticAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingIoStatisticAck;
  return proto.S2CGetMeetingIoStatisticAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingIoStatisticAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingIoStatisticAck}
 */
proto.S2CGetMeetingIoStatisticAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = new proto.MsgMeetingEarning;
      reader.readMessage(value,proto.MsgMeetingEarning.deserializeBinaryFromReader);
      msg.setEarning(value);
      break;
    case 3:
      var value = new proto.MsgMeetingSpending;
      reader.readMessage(value,proto.MsgMeetingSpending.deserializeBinaryFromReader);
      msg.setSpending(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingIoStatisticAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingIoStatisticAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingIoStatisticAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingIoStatisticAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEarning();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MsgMeetingEarning.serializeBinaryToWriter
    );
  }
  f = message.getSpending();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MsgMeetingSpending.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingIoStatisticAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingIoStatisticAck} returns this
 */
proto.S2CGetMeetingIoStatisticAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional MsgMeetingEarning earning = 2;
 * @return {?proto.MsgMeetingEarning}
 */
proto.S2CGetMeetingIoStatisticAck.prototype.getEarning = function() {
  return /** @type{?proto.MsgMeetingEarning} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingEarning, 2));
};


/**
 * @param {?proto.MsgMeetingEarning|undefined} value
 * @return {!proto.S2CGetMeetingIoStatisticAck} returns this
*/
proto.S2CGetMeetingIoStatisticAck.prototype.setEarning = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CGetMeetingIoStatisticAck} returns this
 */
proto.S2CGetMeetingIoStatisticAck.prototype.clearEarning = function() {
  return this.setEarning(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CGetMeetingIoStatisticAck.prototype.hasEarning = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MsgMeetingSpending spending = 3;
 * @return {?proto.MsgMeetingSpending}
 */
proto.S2CGetMeetingIoStatisticAck.prototype.getSpending = function() {
  return /** @type{?proto.MsgMeetingSpending} */ (
    jspb.Message.getWrapperField(this, proto.MsgMeetingSpending, 3));
};


/**
 * @param {?proto.MsgMeetingSpending|undefined} value
 * @return {!proto.S2CGetMeetingIoStatisticAck} returns this
*/
proto.S2CGetMeetingIoStatisticAck.prototype.setSpending = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.S2CGetMeetingIoStatisticAck} returns this
 */
proto.S2CGetMeetingIoStatisticAck.prototype.clearSpending = function() {
  return this.setSpending(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.S2CGetMeetingIoStatisticAck.prototype.hasSpending = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SModifyMeetingTimeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SModifyMeetingTimeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SModifyMeetingTimeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SModifyMeetingTimeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    starttime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endtime: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SModifyMeetingTimeReq}
 */
proto.C2SModifyMeetingTimeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SModifyMeetingTimeReq;
  return proto.C2SModifyMeetingTimeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SModifyMeetingTimeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SModifyMeetingTimeReq}
 */
proto.C2SModifyMeetingTimeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStarttime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SModifyMeetingTimeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SModifyMeetingTimeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SModifyMeetingTimeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SModifyMeetingTimeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEndtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SModifyMeetingTimeReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SModifyMeetingTimeReq} returns this
 */
proto.C2SModifyMeetingTimeReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 startTime = 2;
 * @return {number}
 */
proto.C2SModifyMeetingTimeReq.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SModifyMeetingTimeReq} returns this
 */
proto.C2SModifyMeetingTimeReq.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 endTime = 3;
 * @return {number}
 */
proto.C2SModifyMeetingTimeReq.prototype.getEndtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SModifyMeetingTimeReq} returns this
 */
proto.C2SModifyMeetingTimeReq.prototype.setEndtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CModifyMeetingTimeAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CModifyMeetingTimeAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CModifyMeetingTimeAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CModifyMeetingTimeAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CModifyMeetingTimeAck}
 */
proto.S2CModifyMeetingTimeAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CModifyMeetingTimeAck;
  return proto.S2CModifyMeetingTimeAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CModifyMeetingTimeAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CModifyMeetingTimeAck}
 */
proto.S2CModifyMeetingTimeAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CModifyMeetingTimeAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CModifyMeetingTimeAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CModifyMeetingTimeAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CModifyMeetingTimeAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CModifyMeetingTimeAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CModifyMeetingTimeAck} returns this
 */
proto.S2CModifyMeetingTimeAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingCommentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingCommentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingCommentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingCommentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commentid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    commentroleid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    commentroleicon: jspb.Message.getFieldWithDefault(msg, 4, 0),
    commentrolename: jspb.Message.getFieldWithDefault(msg, 5, ""),
    commenttime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    text: jspb.Message.getFieldWithDefault(msg, 7, ""),
    identityid: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingCommentInfo}
 */
proto.MsgMeetingCommentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingCommentInfo;
  return proto.MsgMeetingCommentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingCommentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingCommentInfo}
 */
proto.MsgMeetingCommentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCommentid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCommentroleid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommentroleicon(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommentrolename(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommenttime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIdentityid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingCommentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingCommentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingCommentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingCommentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommentid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCommentroleid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCommentroleicon();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCommentrolename();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCommenttime();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIdentityid();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.MsgMeetingCommentInfo.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingCommentInfo} returns this
 */
proto.MsgMeetingCommentInfo.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 commentId = 2;
 * @return {number}
 */
proto.MsgMeetingCommentInfo.prototype.getCommentid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingCommentInfo} returns this
 */
proto.MsgMeetingCommentInfo.prototype.setCommentid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 commentRoleId = 3;
 * @return {number}
 */
proto.MsgMeetingCommentInfo.prototype.getCommentroleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingCommentInfo} returns this
 */
proto.MsgMeetingCommentInfo.prototype.setCommentroleid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 commentRoleIcon = 4;
 * @return {number}
 */
proto.MsgMeetingCommentInfo.prototype.getCommentroleicon = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingCommentInfo} returns this
 */
proto.MsgMeetingCommentInfo.prototype.setCommentroleicon = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string commentRoleName = 5;
 * @return {string}
 */
proto.MsgMeetingCommentInfo.prototype.getCommentrolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingCommentInfo} returns this
 */
proto.MsgMeetingCommentInfo.prototype.setCommentrolename = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 commentTime = 6;
 * @return {number}
 */
proto.MsgMeetingCommentInfo.prototype.getCommenttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingCommentInfo} returns this
 */
proto.MsgMeetingCommentInfo.prototype.setCommenttime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string text = 7;
 * @return {string}
 */
proto.MsgMeetingCommentInfo.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingCommentInfo} returns this
 */
proto.MsgMeetingCommentInfo.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 identityId = 8;
 * @return {number}
 */
proto.MsgMeetingCommentInfo.prototype.getIdentityid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingCommentInfo} returns this
 */
proto.MsgMeetingCommentInfo.prototype.setIdentityid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MsgMeetingCommentReplyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.MsgMeetingCommentReplyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MsgMeetingCommentReplyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingCommentReplyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commentid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    replyid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    replyroleid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    replyrolename: jspb.Message.getFieldWithDefault(msg, 5, ""),
    text: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgMeetingCommentReplyInfo}
 */
proto.MsgMeetingCommentReplyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgMeetingCommentReplyInfo;
  return proto.MsgMeetingCommentReplyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgMeetingCommentReplyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgMeetingCommentReplyInfo}
 */
proto.MsgMeetingCommentReplyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCommentid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReplyid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReplyroleid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplyrolename(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgMeetingCommentReplyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MsgMeetingCommentReplyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgMeetingCommentReplyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgMeetingCommentReplyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommentid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getReplyid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getReplyroleid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getReplyrolename();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.MsgMeetingCommentReplyInfo.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingCommentReplyInfo} returns this
 */
proto.MsgMeetingCommentReplyInfo.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 commentId = 2;
 * @return {number}
 */
proto.MsgMeetingCommentReplyInfo.prototype.getCommentid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingCommentReplyInfo} returns this
 */
proto.MsgMeetingCommentReplyInfo.prototype.setCommentid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 replyId = 3;
 * @return {number}
 */
proto.MsgMeetingCommentReplyInfo.prototype.getReplyid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingCommentReplyInfo} returns this
 */
proto.MsgMeetingCommentReplyInfo.prototype.setReplyid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 replyRoleId = 4;
 * @return {number}
 */
proto.MsgMeetingCommentReplyInfo.prototype.getReplyroleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MsgMeetingCommentReplyInfo} returns this
 */
proto.MsgMeetingCommentReplyInfo.prototype.setReplyroleid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string replyRoleName = 5;
 * @return {string}
 */
proto.MsgMeetingCommentReplyInfo.prototype.getReplyrolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingCommentReplyInfo} returns this
 */
proto.MsgMeetingCommentReplyInfo.prototype.setReplyrolename = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string text = 6;
 * @return {string}
 */
proto.MsgMeetingCommentReplyInfo.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.MsgMeetingCommentReplyInfo} returns this
 */
proto.MsgMeetingCommentReplyInfo.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SGetMeetingCommentListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SGetMeetingCommentListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SGetMeetingCommentListReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingCommentListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SGetMeetingCommentListReq}
 */
proto.C2SGetMeetingCommentListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SGetMeetingCommentListReq;
  return proto.C2SGetMeetingCommentListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SGetMeetingCommentListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SGetMeetingCommentListReq}
 */
proto.C2SGetMeetingCommentListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SGetMeetingCommentListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SGetMeetingCommentListReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SGetMeetingCommentListReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SGetMeetingCommentListReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SGetMeetingCommentListReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SGetMeetingCommentListReq} returns this
 */
proto.C2SGetMeetingCommentListReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.S2CGetMeetingCommentListAck.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CGetMeetingCommentListAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CGetMeetingCommentListAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CGetMeetingCommentListAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingCommentListAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    commentsList: jspb.Message.toObjectList(msg.getCommentsList(),
    proto.MsgMeetingCommentInfo.toObject, includeInstance),
    replysList: jspb.Message.toObjectList(msg.getReplysList(),
    proto.MsgMeetingCommentReplyInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CGetMeetingCommentListAck}
 */
proto.S2CGetMeetingCommentListAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CGetMeetingCommentListAck;
  return proto.S2CGetMeetingCommentListAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CGetMeetingCommentListAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CGetMeetingCommentListAck}
 */
proto.S2CGetMeetingCommentListAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 3:
      var value = new proto.MsgMeetingCommentInfo;
      reader.readMessage(value,proto.MsgMeetingCommentInfo.deserializeBinaryFromReader);
      msg.addComments(value);
      break;
    case 4:
      var value = new proto.MsgMeetingCommentReplyInfo;
      reader.readMessage(value,proto.MsgMeetingCommentReplyInfo.deserializeBinaryFromReader);
      msg.addReplys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CGetMeetingCommentListAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CGetMeetingCommentListAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CGetMeetingCommentListAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CGetMeetingCommentListAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.MsgMeetingCommentInfo.serializeBinaryToWriter
    );
  }
  f = message.getReplysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.MsgMeetingCommentReplyInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CGetMeetingCommentListAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CGetMeetingCommentListAck} returns this
 */
proto.S2CGetMeetingCommentListAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CGetMeetingCommentListAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CGetMeetingCommentListAck} returns this
 */
proto.S2CGetMeetingCommentListAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated MsgMeetingCommentInfo comments = 3;
 * @return {!Array<!proto.MsgMeetingCommentInfo>}
 */
proto.S2CGetMeetingCommentListAck.prototype.getCommentsList = function() {
  return /** @type{!Array<!proto.MsgMeetingCommentInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgMeetingCommentInfo, 3));
};


/**
 * @param {!Array<!proto.MsgMeetingCommentInfo>} value
 * @return {!proto.S2CGetMeetingCommentListAck} returns this
*/
proto.S2CGetMeetingCommentListAck.prototype.setCommentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.MsgMeetingCommentInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingCommentInfo}
 */
proto.S2CGetMeetingCommentListAck.prototype.addComments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.MsgMeetingCommentInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingCommentListAck} returns this
 */
proto.S2CGetMeetingCommentListAck.prototype.clearCommentsList = function() {
  return this.setCommentsList([]);
};


/**
 * repeated MsgMeetingCommentReplyInfo replys = 4;
 * @return {!Array<!proto.MsgMeetingCommentReplyInfo>}
 */
proto.S2CGetMeetingCommentListAck.prototype.getReplysList = function() {
  return /** @type{!Array<!proto.MsgMeetingCommentReplyInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MsgMeetingCommentReplyInfo, 4));
};


/**
 * @param {!Array<!proto.MsgMeetingCommentReplyInfo>} value
 * @return {!proto.S2CGetMeetingCommentListAck} returns this
*/
proto.S2CGetMeetingCommentListAck.prototype.setReplysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.MsgMeetingCommentReplyInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MsgMeetingCommentReplyInfo}
 */
proto.S2CGetMeetingCommentListAck.prototype.addReplys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.MsgMeetingCommentReplyInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.S2CGetMeetingCommentListAck} returns this
 */
proto.S2CGetMeetingCommentListAck.prototype.clearReplysList = function() {
  return this.setReplysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SMeetingCommentReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SMeetingCommentReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SMeetingCommentReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingCommentReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SMeetingCommentReq}
 */
proto.C2SMeetingCommentReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SMeetingCommentReq;
  return proto.C2SMeetingCommentReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SMeetingCommentReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SMeetingCommentReq}
 */
proto.C2SMeetingCommentReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SMeetingCommentReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SMeetingCommentReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SMeetingCommentReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingCommentReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SMeetingCommentReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingCommentReq} returns this
 */
proto.C2SMeetingCommentReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.C2SMeetingCommentReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingCommentReq} returns this
 */
proto.C2SMeetingCommentReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CMeetingCommentAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CMeetingCommentAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CMeetingCommentAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingCommentAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CMeetingCommentAck}
 */
proto.S2CMeetingCommentAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CMeetingCommentAck;
  return proto.S2CMeetingCommentAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CMeetingCommentAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CMeetingCommentAck}
 */
proto.S2CMeetingCommentAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CMeetingCommentAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CMeetingCommentAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CMeetingCommentAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingCommentAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CMeetingCommentAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingCommentAck} returns this
 */
proto.S2CMeetingCommentAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CMeetingCommentAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingCommentAck} returns this
 */
proto.S2CMeetingCommentAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SMeetingCommentReplyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SMeetingCommentReplyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SMeetingCommentReplyReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingCommentReplyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commentid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    text: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SMeetingCommentReplyReq}
 */
proto.C2SMeetingCommentReplyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SMeetingCommentReplyReq;
  return proto.C2SMeetingCommentReplyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SMeetingCommentReplyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SMeetingCommentReplyReq}
 */
proto.C2SMeetingCommentReplyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCommentid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SMeetingCommentReplyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SMeetingCommentReplyReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SMeetingCommentReplyReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingCommentReplyReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommentid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SMeetingCommentReplyReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingCommentReplyReq} returns this
 */
proto.C2SMeetingCommentReplyReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 commentId = 2;
 * @return {number}
 */
proto.C2SMeetingCommentReplyReq.prototype.getCommentid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingCommentReplyReq} returns this
 */
proto.C2SMeetingCommentReplyReq.prototype.setCommentid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string text = 3;
 * @return {string}
 */
proto.C2SMeetingCommentReplyReq.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingCommentReplyReq} returns this
 */
proto.C2SMeetingCommentReplyReq.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CMeetingCommentReplyAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CMeetingCommentReplyAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CMeetingCommentReplyAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingCommentReplyAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CMeetingCommentReplyAck}
 */
proto.S2CMeetingCommentReplyAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CMeetingCommentReplyAck;
  return proto.S2CMeetingCommentReplyAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CMeetingCommentReplyAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CMeetingCommentReplyAck}
 */
proto.S2CMeetingCommentReplyAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CMeetingCommentReplyAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CMeetingCommentReplyAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CMeetingCommentReplyAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingCommentReplyAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CMeetingCommentReplyAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingCommentReplyAck} returns this
 */
proto.S2CMeetingCommentReplyAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CMeetingCommentReplyAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingCommentReplyAck} returns this
 */
proto.S2CMeetingCommentReplyAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.C2SMeetingGiftGivingReq.prototype.toObject = function(opt_includeInstance) {
  return proto.C2SMeetingGiftGivingReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.C2SMeetingGiftGivingReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingGiftGivingReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    targetroleid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    giftid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.C2SMeetingGiftGivingReq}
 */
proto.C2SMeetingGiftGivingReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.C2SMeetingGiftGivingReq;
  return proto.C2SMeetingGiftGivingReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.C2SMeetingGiftGivingReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.C2SMeetingGiftGivingReq}
 */
proto.C2SMeetingGiftGivingReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetroleid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGiftid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.C2SMeetingGiftGivingReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.C2SMeetingGiftGivingReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.C2SMeetingGiftGivingReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.C2SMeetingGiftGivingReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetroleid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getGiftid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.C2SMeetingGiftGivingReq.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingGiftGivingReq} returns this
 */
proto.C2SMeetingGiftGivingReq.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 targetRoleId = 2;
 * @return {number}
 */
proto.C2SMeetingGiftGivingReq.prototype.getTargetroleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.C2SMeetingGiftGivingReq} returns this
 */
proto.C2SMeetingGiftGivingReq.prototype.setTargetroleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string giftId = 3;
 * @return {string}
 */
proto.C2SMeetingGiftGivingReq.prototype.getGiftid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.C2SMeetingGiftGivingReq} returns this
 */
proto.C2SMeetingGiftGivingReq.prototype.setGiftid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2CMeetingGiftGivingAck.prototype.toObject = function(opt_includeInstance) {
  return proto.S2CMeetingGiftGivingAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2CMeetingGiftGivingAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingGiftGivingAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    meetingid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    whoroleid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    whorolename: jspb.Message.getFieldWithDefault(msg, 4, ""),
    targetroleid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    targetrolename: jspb.Message.getFieldWithDefault(msg, 6, ""),
    giftid: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2CMeetingGiftGivingAck}
 */
proto.S2CMeetingGiftGivingAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2CMeetingGiftGivingAck;
  return proto.S2CMeetingGiftGivingAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2CMeetingGiftGivingAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2CMeetingGiftGivingAck}
 */
proto.S2CMeetingGiftGivingAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWhoroleid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhorolename(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetroleid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetrolename(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setGiftid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2CMeetingGiftGivingAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2CMeetingGiftGivingAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2CMeetingGiftGivingAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2CMeetingGiftGivingAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrcode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWhoroleid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWhorolename();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTargetroleid();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTargetrolename();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGiftid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int32 errCode = 1;
 * @return {number}
 */
proto.S2CMeetingGiftGivingAck.prototype.getErrcode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingGiftGivingAck} returns this
 */
proto.S2CMeetingGiftGivingAck.prototype.setErrcode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string meetingId = 2;
 * @return {string}
 */
proto.S2CMeetingGiftGivingAck.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingGiftGivingAck} returns this
 */
proto.S2CMeetingGiftGivingAck.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 whoRoleId = 3;
 * @return {number}
 */
proto.S2CMeetingGiftGivingAck.prototype.getWhoroleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingGiftGivingAck} returns this
 */
proto.S2CMeetingGiftGivingAck.prototype.setWhoroleid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string whoRoleName = 4;
 * @return {string}
 */
proto.S2CMeetingGiftGivingAck.prototype.getWhorolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingGiftGivingAck} returns this
 */
proto.S2CMeetingGiftGivingAck.prototype.setWhorolename = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 targetRoleId = 5;
 * @return {number}
 */
proto.S2CMeetingGiftGivingAck.prototype.getTargetroleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.S2CMeetingGiftGivingAck} returns this
 */
proto.S2CMeetingGiftGivingAck.prototype.setTargetroleid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string targetRoleName = 6;
 * @return {string}
 */
proto.S2CMeetingGiftGivingAck.prototype.getTargetrolename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingGiftGivingAck} returns this
 */
proto.S2CMeetingGiftGivingAck.prototype.setTargetrolename = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string giftId = 7;
 * @return {string}
 */
proto.S2CMeetingGiftGivingAck.prototype.getGiftid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.S2CMeetingGiftGivingAck} returns this
 */
proto.S2CMeetingGiftGivingAck.prototype.setGiftid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


// goog.object.extend(exports, proto);
export default proto;//后
