export default {
  version: "1.0.0",
  locale: {
    source: "en",
    targets: ["sv"],
  },
  files: {
    json: {
      include: ["locales/[locale].json"],
    },
  },
  llm: {
    provider: "openai",
    model: "gpt-4-turbo",
  },
};
