function slugifyy(title: string): string {
  return title.toLowerCase()
              .replace(/[\s]/g, '-')
              .replace(/[^a-z0-9-]/g, '')
}

async function generateUniqueSlug(title: string, uid: string, id = null) {
  const baseSlug = slugifyy(title);
  let slug = baseSlug;
  let count = 1;

  const existing = await strapi.db.query(uid).findOne({
    where: {
      slug,
      ...(id && { id: { $ne: id } }),
    },
  });

  if (existing) {
    slug = `${baseSlug}-${count++}`;
  }

  return slug;
}

interface LifecycleEvent<T = any> {
  params: {
    data: T;
    where?: {
      id?: number;
    };
  };
}

export default {
  async beforeCreate(event: LifecycleEvent) {
    const { data } = event.params;
    if (data.title) {
      data.slug = await generateUniqueSlug(
        data.title,
        "api::sermon.sermon"
      );
    }
  },

  async beforeUpdate(event: LifecycleEvent) {
    const { data, where } = event.params;
    if (data.title) {
      data.slug = await generateUniqueSlug(
        data.title,
        "api::sermon.sermon",
        where.id
      );
    }
  },
};
