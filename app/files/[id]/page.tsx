import { Header } from '@/components/header';
import { FileDetail } from '@/components/file-detail';
import { RelatedFiles } from '@/components/related-files';
import { Breadcrumb } from '@/components/breadcrumb';

interface FilePageProps {
  params: {
    id: string;
  };
}

export default function FilePage({ params }: FilePageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Files', href: '/' },
            { label: 'File Details', href: `/files/${params.id}` }
          ]}
        />
        <FileDetail fileId={params.id} />
        <RelatedFiles fileId={params.id} />
      </div>
    </div>
  );
}