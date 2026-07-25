export interface EvalCase{name:string;input:Record<string,unknown>;expected?:unknown;snapshots?:string[];}
export interface EvalConfig{name:string;cases:EvalCase[];failFast?:boolean;strict?:boolean;}
export interface EvalResult{caseName:string;passed:boolean;expected?:unknown;actual:unknown;durationMs:number;error?:string;}
export interface EvalReport{passed:boolean;total:number;passedCount:number;failedCount:number;results:EvalResult[];}