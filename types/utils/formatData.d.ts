export declare const replaceUnderscoresWithSpaces: (text: string) => string;
export declare const formatAgesForSummary: (ageRanges: {
    ageFrom: number;
    ageTo?: number;
}[]) => string;
export declare const formatLocationsForSummary: (locations: {
    display: string;
    value: string;
}[]) => string;
export declare const formatGendersForSummary: (genders: string[]) => string;
export declare const formatArrayOfStringToStringWithCommas: (items: string[]) => string;
export declare const formatQuestionsForSummary: (questions: any) => any[];
export declare const getVideoLengthInSeconds: (videoLength: string) => number;
export declare const processSelectedRange: (videoDurationAllowedRange?: any[]) => string[];
