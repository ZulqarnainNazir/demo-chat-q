export const QBconfig = {
  credentials: {
    appId: '85313',
    authKey: 'waqssac2yCxZNCQ',
    authSecret: '2hHpNaLwadhLf96'
  },
  appConfig: {
    chatProtocol: {
      active: 2
    },
    streamManagement: {
      enable: true
    },
    debug: {
      mode: 1,
      file: null
    }
  }
};

export const CONSTANTS = {
  DIALOG_TYPES: {
    CHAT: 3,
    GROUPCHAT: 2,
    PUBLICCHAT: 1
  },
  ATTACHMENT: {
    TYPE: 'image',
    BODY: '[attachment]',
    MAXSIZE: 2 * 1000000, // set 2 megabytes,
    MAXSIZEMESSAGE: 'Image is too large. Max size is 2 mb.'
  },
  NOTIFICATION_TYPES: {
    NEW_DIALOG: '1',
    UPDATE_DIALOG: '2',
    LEAVE_DIALOG: '3'
  }
};
