export function setupGame(seed=new Date().getTime()) {
   return { "type": "SETUP_GAME", seed };
};

export function setRecord(score){
  return{
    "type":"SET_RECORD",
    score
  };
};


export function dealToTable(seed=new Date().getTime()) {
   return { "type": "DEAL_TO_TABLE", seed };
};
