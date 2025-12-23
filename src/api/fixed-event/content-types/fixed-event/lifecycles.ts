// type DeepLService = {
//   translate(text: string, source?: string, target?: string): Promise<string>;
// };

export default {
  // TODO - will be used later
  // async afterCreate(event) {
  //   const { result } = event;

  //   console.log("la-result: ", result)

  //   // Only translate the default locale (English)
  //   if (result.locale !== 'en' || result.slug.endsWith('-fr')) return;

  //   const deepl = strapi.service('api::fixed-event.fixed-event');

  //   // Translate all desired fields
  //   const translatedTitle = await deepl.translate(result.title);
  //   const translatedDescription = await deepl.translate(result.description);
  //   const translatedSchedule = await deepl.translate(result.schedule);

  //   // Create the French localization using new entityService API
  //   await strapi.entityService.create('api::fixed-event.fixed-event', {
  //     data: {
  //       title: translatedTitle,
  //       description: translatedDescription,
  //       schedule: translatedSchedule,
  //       image: result.image,
  //       slug: `${result.slug}-fr`,
  //       url: result.url,
  //       relatedDocumentId: result.documentId,
  //       locale: 'fr',
  //     },
  //   });
  // },
};
