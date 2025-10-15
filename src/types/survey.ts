export interface SurveyData {
  name: string;
  customerService: number;
  customerServiceComment?: string;
  designQuality: number;
  designQualityComment?: string;
  challenges?: string;
  recommendation: number;
  improvements?: string;
  captcha: boolean;
}
