export enum ERequest {
    COUNT = 'COUNT',
  
    IS_IN_PROGRESS = 'IS_IN_PROGRESS',
  
    OPTIONS = 'OPTIONS',
  
    RUN_TASKS = 'RUN_TASKS',
    STOP_TASKS = 'STOP_TASKS',
  
    IS_DEBUG = 'IS_DEBUG',
  
    ACTIVE_TAB = 'ACTIVE_TAB',
    
    GET_ACTIVE_TAB = 'GET_ACTIVE_TAB',
  }
  
  export type OptionsSimulateTrustedClick = {
    x: number;
    y: number;
    button: string;
  };
  