export const replaceUnderscoresWithSpaces = (text: string) => {
  return text.replaceAll('_', ' ');
};

export const formatAgesForSummary = (ageRanges: { ageFrom: number; ageTo?: number }[]) => {
  const ages = ageRanges.map((ageRange) =>
    ageRange.ageFrom !== 65 ? `${ageRange.ageFrom} - ${ageRange.ageTo}` : `${ageRange.ageFrom}+`
  );

  return ages.length === 7 ? 'All' : ages.join(', ');
};

export const formatLocationsForSummary = (locations: { display: string; value: string }[]) =>
  locations.map((location) => location.display).join(', ');

export const formatGendersForSummary = (genders: string[]) => {
  if (genders[0] === 'any') return 'All';
  return formatArrayOfStringToStringWithCommas(genders);
};

export const formatArrayOfStringToStringWithCommas = (items: string[]) =>
  items.map((item) => replaceUnderscoresWithSpaces(item)).join(', ');

export const formatQuestionsForSummary = (questions: any) => {
  let result: any[] = [];

  for (let key in questions) {
    if (key === 'multipleChoiceQuestions') {
      const temp = questions['multipleChoiceQuestions'].map((question: any) => ({
        id: question.id,
        name: 'Question',
        text: question.questionText,
        questionOrder: question.questionOrder,
        type: { label: 'Multiple Choice', name: 'multiplechoice' },
        options: Object.values(question.optionTexts).map((option) => ({
          name: 'Option',
          text: option,
        })),
      }));

      result = [...result, ...temp];
    }

    if (key === 'selectAllThatApplyQuestions') {
      const temp = questions['selectAllThatApplyQuestions'].map((question: any) => ({
        id: question.id,
        name: 'Question',
        text: question.questionText,
        questionOrder: question.questionOrder,
        type: { label: 'Select all that Apply', name: 'selectallthatapply' },
        options: Object.values(question.optionTexts).map((option) => ({
          name: 'Option',
          text: option,
        })),
      }));

      result = [...result, ...temp];
    }

    if (key === 'shortAnswerQuestions') {
      const temp = questions['shortAnswerQuestions'].map((question: any) => ({
        updateId: question.id,
        name: 'Question',
        saved: false,
        text: question.questionText,
        questionOrder: question.questionOrder,
        type: { label: 'Short Answer', name: 'shortanswer' },
        options: [],
      }));

      result = [...result, ...temp];
    }

    if (key === 'viewerSentimentQuestions') {
      const temp = questions['viewerSentimentQuestions'].map((question: any) => ({
        updateId: question.id,
        name: 'Question',
        saved: false,
        text: question.questionText,
        questionOrder: question.questionOrder,
        type: { label: 'Viewer Sentiment', name: 'viewersentiment' },
        options: [],
      }));

      result = [...result, ...temp];
    }

    if (key === 'yesNoQuestions') {
      const temp = questions['yesNoQuestions'].map((question: any) => ({
        updateId: question.id,
        name: 'Question',
        saved: false,
        text: question.questionText,
        questionOrder: question.questionOrder,
        type: { label: 'Yes/No', name: 'yesno' },
        options: [],
      }));

      result = [...result, ...temp];
    }
  }

  return result
    .sort((a, b) => a.questionOrder - b.questionOrder)
    .map((question, index) => ({
      ...question,
      questionOrder: index + 1,
    }));
};

export const getVideoLengthInSeconds = (videoLength: string) => {
  if (videoLength) {
    const minutes = videoLength.split(':')[1];
    const seconds = videoLength.split(':')[2];

    if (minutes && seconds) {
      return +minutes * 60 + +seconds;
    } else {
      return +seconds;
    }
  }

  return 16;
};

export const processSelectedRange = (videoDurationAllowedRange: any[] = []) => {
  if (videoDurationAllowedRange.length === 0) return ['-'];
  const durations = videoDurationAllowedRange.map(
    ({ videoMinTimeInSeconds, videoMaxTimeInSeconds }) =>
      `${videoMinTimeInSeconds} - ${videoMaxTimeInSeconds} s`
  );
  return durations as string[];
};
