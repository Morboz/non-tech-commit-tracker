
export default async function Page({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    console.log('slug', slug);
    return <p>This is the {slug} community. Not supported yet.</p>
}