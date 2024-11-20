import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  Handle,
  Position,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { BadgeCheck, X, MessageCircle, Star, Users, Building, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Connection {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  country: string;
  avatar: string;
  trustScore: number;
  verified: boolean;
  sector: string;
  expertise: string[];
  mutualConnections: number;
}

interface CustomNodeData {
  connection: Connection;
}

interface ClusterBadgeData {
  sector: string;
  count: number;
  connections: Connection[];
}

interface UserDetailsModalProps {
  connection: Connection;
  onClose: () => void;
  onMessage: (userId: number) => void;
}

const UserDetailsModal = ({ connection, onClose, onMessage }: UserDetailsModalProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-4">
            <img
              src={connection.avatar}
              alt={connection.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <div className="flex items-center">
                <h2 className="text-xl font-bold text-gray-900">{connection.name}</h2>
                {connection.verified && (
                  <BadgeCheck className="w-5 h-5 text-blue-500 ml-2" />
                )}
              </div>
              <p className="text-gray-600">{connection.role}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center text-gray-500">
                  <Building className="w-4 h-4 mr-1" />
                  {connection.company}
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  {connection.location}, {connection.country}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <div>
                <div className="text-xl font-bold">{connection.trustScore}</div>
                <div className="text-sm text-gray-500">Trust Score</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              <div>
                <div className="text-xl font-bold">{connection.mutualConnections}</div>
                <div className="text-sm text-gray-500">Mutual Connections</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <BadgeCheck className="w-5 h-5 text-green-400 mr-2" />
              <div>
                <div className="text-xl font-bold">{connection.sector}</div>
                <div className="text-sm text-gray-500">Sector</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {connection.expertise.map((exp, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => onMessage(connection.id)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
);

const CustomNode = ({ data }: { data: CustomNodeData }) => {
  const { connection } = data;
  
  return (
    <div className="px-4 py-2 shadow-md rounded-xl bg-white border-2 border-gray-200 min-w-[250px]">
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
      <div className="flex items-center">
        <img
          src={connection.avatar}
          alt={connection.name}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <div className="text-sm font-bold">{connection.name}</div>
          <div className="text-xs text-gray-500">{connection.role}</div>
        </div>
      </div>
      <div className="mt-2">
        <div className="text-xs text-gray-600">
          <span className="font-semibold">Country:</span> {connection.country}
        </div>
        <div className="text-xs text-gray-600">
          <span className="font-semibold">Sector:</span> {connection.sector}
        </div>
        <div className="text-xs text-gray-600">
          <span className="font-semibold">Expertise:</span> {connection.expertise.join(', ')}
        </div>
        <div className="mt-1">
          <div className="text-xs bg-blue-50 text-blue-700 rounded-full px-2 py-1 inline-block">
            Trust Score: {connection.trustScore}
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
    </div>
  );
};

const ClusterBadge = ({ data, onClick }: { data: ClusterBadgeData; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 shadow-md rounded-full bg-blue-600 text-white border-2 border-blue-400 hover:bg-blue-700 transition-colors"
    >
      <div className="flex items-center gap-2">
        <BadgeCheck className="w-5 h-5" />
        <div className="text-sm font-bold">{data.sector}</div>
        <div className="text-xs">({data.count})</div>
      </div>
    </button>
  );
};

const nodeTypes = {
  custom: CustomNode,
  badge: ClusterBadge,
};

export function NetworkGraph({ connections }: { connections: Connection[] }) {
  const [selectedConnection, setSelectedConnection] = useState<Connection | null>(null);
  const navigate = useNavigate();

  // Group connections by sector
  const sectorGroups = connections.reduce((acc, conn) => {
    if (!acc[conn.sector]) {
      acc[conn.sector] = [];
    }
    acc[conn.sector].push(conn);
    return acc;
  }, {} as Record<string, Connection[]>);

  // Take the top 6 sectors by number of connections
  const topSectors = Object.entries(sectorGroups)
    .sort(([, a], [, b]) => b.length - a.length)
    .slice(0, 6);

  // Create nodes with cluster layout
  const initialNodes: Node[] = [];
  const initialEdges: Edge[] = [];
  const centerX = 800;
  const centerY = 400;
  const clusterRadius = 400;
  const nodeRadius = 200;

  topSectors.forEach(([sector, conns], clusterIndex) => {
    // Calculate cluster center position
    const clusterAngle = (2 * Math.PI * clusterIndex) / 6;
    const clusterX = centerX + Math.cos(clusterAngle) * clusterRadius;
    const clusterY = centerY + Math.sin(clusterAngle) * clusterRadius;

    // Add cluster badge node
    const badgeId = `badge-${sector}`;
    initialNodes.push({
      id: badgeId,
      type: 'badge',
      data: { 
        sector, 
        count: conns.length,
        connections: conns,
        onClick: () => setSelectedConnection(conns[0])
      },
      position: { x: clusterX, y: clusterY },
    });

    // Add connection nodes in a circle around the badge
    conns.slice(0, 5).forEach((conn, nodeIndex) => {
      const nodeAngle = (2 * Math.PI * nodeIndex) / 5;
      const nodeX = clusterX + Math.cos(nodeAngle) * nodeRadius;
      const nodeY = clusterY + Math.sin(nodeAngle) * nodeRadius;

      initialNodes.push({
        id: conn.id.toString(),
        type: 'custom',
        data: { connection: conn },
        position: { x: nodeX, y: nodeY },
      });

      // Connect node to cluster badge
      initialEdges.push({
        id: `e-${badgeId}-${conn.id}`,
        source: badgeId,
        target: conn.id.toString(),
        animated: true,
        style: { stroke: '#3b82f6', strokeWidth: 2 },
      });

      // Connect to other nodes in the same cluster
      conns.slice(0, 5).forEach((targetConn) => {
        if (conn.id < targetConn.id) {
          initialEdges.push({
            id: `e-${conn.id}-${targetConn.id}`,
            source: conn.id.toString(),
            target: targetConn.id.toString(),
            animated: true,
            style: { stroke: '#94a3b8', strokeWidth: 1 },
          });
        }
      });
    });
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  const handleMessage = (userId: number) => {
    navigate(`/messages/${userId}`);
  };

  return (
    <>
      <div className="h-[800px] bg-gray-50 rounded-lg border border-gray-200">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          connectionMode={ConnectionMode.Loose}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap
            nodeColor={(node) => {
              if (node.type === 'badge') return '#3b82f6';
              const score = (node.data as CustomNodeData).connection.trustScore;
              return score > 90 ? '#22c55e' : score > 80 ? '#3b82f6' : '#ef4444';
            }}
            maskColor="#ffffff50"
          />
        </ReactFlow>
      </div>

      {selectedConnection && (
        <UserDetailsModal
          connection={selectedConnection}
          onClose={() => setSelectedConnection(null)}
          onMessage={handleMessage}
        />
      )}
    </>
  );
}