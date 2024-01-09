import { differenceInCalendarDays } from 'date-fns';

export const calculateCampaignDuration = (startDate: Date | string, endDate: Date | string) =>
  endDate ? differenceInCalendarDays(new Date(endDate), new Date(startDate)) + 1 : 0;

export const calculateDailyBudget = (campaignDuration: number, budget: number) =>
  campaignDuration ? Number((budget / campaignDuration).toFixed(2).replace('.00', '')) : 0;
