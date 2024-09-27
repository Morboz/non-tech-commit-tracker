// page.tsx
import Tabs from '@/app/ui/communities/table';
import { communities } from '@/app/lib/data';

export default function Page() {
  return (
    <div>
      <h1>Communities Page</h1>
      <Tabs communities={communities} />
    </div>
  );
}