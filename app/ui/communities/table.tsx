'use client';
// Tabs.tsx

import { useState } from 'react';
import { Community } from '@/app/lib/definitions';

type TabsProps = {
  communities: Community[];
};

const Tabs: React.FC<TabsProps> = ({ communities }) => {
  const [activeTab, setActiveTab] = useState(communities[0].id);

  return (
    <div>
      <div className="tabs">
        {communities.map((community) => (
          <button
            key={community.id}
            className={activeTab === community.id ? 'active' : ''}
            onClick={() => setActiveTab(community.id)}
          >
            {community.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {communities.map((community) =>
          activeTab === community.id ? (
            <div key={community.id}>
              <img src={community.image_url} alt={community.name} />
              <p>{community.name}</p>
              <p>Members: {community.members_count}</p>
            </div>
          ) : null
        )}
      </div>
      <style jsx>{`
        .tabs {
          display: flex;
          cursor: pointer;
        }
        .tabs button {
          padding: 10px;
          margin-right: 10px;
          border: none;
          background: none;
        }
        .tabs button.active {
          font-weight: bold;
          border-bottom: 2px solid #000;
        }
        .tab-content {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Tabs;