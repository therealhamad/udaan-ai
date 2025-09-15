'use client';

import React, { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  addEdge,
  ConnectionLineType,
  Panel,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface CareerRoadmapProps {
  stream: string;
}

interface RoadmapData {
  nodes: Node[];
  edges: Edge[];
}

const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ stream }) => {
  const roadmapData = useMemo((): RoadmapData => {
    switch (stream.toLowerCase()) {
      case 'science':
        return {
          nodes: [
            {
              id: '1',
              type: 'default',
              position: { x: 250, y: 0 },
              data: { 
                label: 'Science Stream',
                description: 'Strong foundation in Physics, Chemistry, Mathematics'
              },
              style: { 
                background: '#dbeafe', 
                color: '#1e40af', 
                border: '2px solid #60a5fa',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '14px',
                fontWeight: 'bold'
              },
            },
            {
              id: '2',
              type: 'default',
              position: { x: 100, y: 120 },
              data: { 
                label: 'B.Tech/B.E.',
                description: 'Engineering degree - 4 years'
              },
              style: { 
                background: '#dcfce7', 
                color: '#166534', 
                border: '2px solid #4ade80',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '3',
              type: 'default',
              position: { x: 250, y: 120 },
              data: { 
                label: 'MBBS',
                description: 'Medical degree - 5.5 years'
              },
              style: { 
                background: '#fef3c7', 
                color: '#92400e', 
                border: '2px solid #fbbf24',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '4',
              type: 'default',
              position: { x: 400, y: 120 },
              data: { 
                label: 'B.Sc.',
                description: 'Science degree - 3 years'
              },
              style: { 
                background: '#e0e7ff', 
                color: '#3730a3', 
                border: '2px solid #8b5cf6',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '5',
              type: 'default',
              position: { x: 50, y: 240 },
              data: { 
                label: 'Software Engineer',
                description: 'Technology industry career'
              },
              style: { 
                background: '#f0f9ff', 
                color: '#0c4a6e', 
                border: '2px solid #0ea5e9',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '6',
              type: 'default',
              position: { x: 150, y: 240 },
              data: { 
                label: 'Data Scientist',
                description: 'Analytics and AI specialist'
              },
              style: { 
                background: '#f0f9ff', 
                color: '#0c4a6e', 
                border: '2px solid #0ea5e9',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '7',
              type: 'default',
              position: { x: 250, y: 240 },
              data: { 
                label: 'Doctor',
                description: 'Healthcare professional'
              },
              style: { 
                background: '#fef3c7', 
                color: '#92400e', 
                border: '2px solid #fbbf24',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '8',
              type: 'default',
              position: { x: 350, y: 240 },
              data: { 
                label: 'Researcher',
                description: 'Academic or industrial research'
              },
              style: { 
                background: '#e0e7ff', 
                color: '#3730a3', 
                border: '2px solid #8b5cf6',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '9',
              type: 'default',
              position: { x: 450, y: 240 },
              data: { 
                label: 'Science Teacher',
                description: 'Education sector career'
              },
              style: { 
                background: '#e0e7ff', 
                color: '#3730a3', 
                border: '2px solid #8b5cf6',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
          ],
          edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#60a5fa', strokeWidth: 2 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
            { id: 'e2-5', source: '2', target: '5', type: 'smoothstep', style: { stroke: '#0ea5e9', strokeWidth: 2 } },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep', style: { stroke: '#0ea5e9', strokeWidth: 2 } },
            { id: 'e3-7', source: '3', target: '7', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e4-8', source: '4', target: '8', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
            { id: 'e4-9', source: '4', target: '9', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
          ],
        };

      case 'commerce':
        return {
          nodes: [
            {
              id: '1',
              type: 'default',
              position: { x: 250, y: 0 },
              data: { 
                label: 'Commerce Stream',
                description: 'Business, Economics, Accounting foundation'
              },
              style: { 
                background: '#dcfce7', 
                color: '#166534', 
                border: '2px solid #4ade80',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '14px',
                fontWeight: 'bold'
              },
            },
            {
              id: '2',
              type: 'default',
              position: { x: 150, y: 120 },
              data: { 
                label: 'B.Com',
                description: 'Commerce degree - 3 years'
              },
              style: { 
                background: '#fef3c7', 
                color: '#92400e', 
                border: '2px solid #fbbf24',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '3',
              type: 'default',
              position: { x: 350, y: 120 },
              data: { 
                label: 'BBA',
                description: 'Business Administration - 3 years'
              },
              style: { 
                background: '#e0e7ff', 
                color: '#3730a3', 
                border: '2px solid #8b5cf6',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '4',
              type: 'default',
              position: { x: 100, y: 240 },
              data: { 
                label: 'CA/CPA',
                description: 'Chartered Accountant'
              },
              style: { 
                background: '#fef3c7', 
                color: '#92400e', 
                border: '2px solid #fbbf24',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '5',
              type: 'default',
              position: { x: 200, y: 240 },
              data: { 
                label: 'Banking',
                description: 'Financial services career'
              },
              style: { 
                background: '#fef3c7', 
                color: '#92400e', 
                border: '2px solid #fbbf24',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '6',
              type: 'default',
              position: { x: 300, y: 240 },
              data: { 
                label: 'MBA',
                description: 'Masters in Business Admin'
              },
              style: { 
                background: '#e0e7ff', 
                color: '#3730a3', 
                border: '2px solid #8b5cf6',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '7',
              type: 'default',
              position: { x: 400, y: 240 },
              data: { 
                label: 'Business Manager',
                description: 'Corporate management role'
              },
              style: { 
                background: '#e0e7ff', 
                color: '#3730a3', 
                border: '2px solid #8b5cf6',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
          ],
          edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
            { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e2-5', source: '2', target: '5', type: 'smoothstep', style: { stroke: '#fbbf24', strokeWidth: 2 } },
            { id: 'e3-6', source: '3', target: '6', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
            { id: 'e3-7', source: '3', target: '7', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
          ],
        };

      case 'arts':
        return {
          nodes: [
            {
              id: '1',
              type: 'default',
              position: { x: 250, y: 0 },
              data: { 
                label: 'Arts Stream',
                description: 'Literature, History, Philosophy foundation'
              },
              style: { 
                background: '#fce7f3', 
                color: '#be185d', 
                border: '2px solid #f472b6',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '14px',
                fontWeight: 'bold'
              },
            },
            {
              id: '2',
              type: 'default',
              position: { x: 150, y: 120 },
              data: { 
                label: 'B.A.',
                description: 'Arts degree - 3 years'
              },
              style: { 
                background: '#e0e7ff', 
                color: '#3730a3', 
                border: '2px solid #8b5cf6',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '3',
              type: 'default',
              position: { x: 350, y: 120 },
              data: { 
                label: 'B.Ed',
                description: 'Education degree - 2 years'
              },
              style: { 
                background: '#dcfce7', 
                color: '#166534', 
                border: '2px solid #4ade80',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '4',
              type: 'default',
              position: { x: 100, y: 240 },
              data: { 
                label: 'Civil Services',
                description: 'Government administration'
              },
              style: { 
                background: '#e0e7ff', 
                color: '#3730a3', 
                border: '2px solid #8b5cf6',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '5',
              type: 'default',
              position: { x: 200, y: 240 },
              data: { 
                label: 'Journalist',
                description: 'Media and communications'
              },
              style: { 
                background: '#e0e7ff', 
                color: '#3730a3', 
                border: '2px solid #8b5cf6',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '6',
              type: 'default',
              position: { x: 350, y: 240 },
              data: { 
                label: 'Teacher',
                description: 'Education profession'
              },
              style: { 
                background: '#dcfce7', 
                color: '#166534', 
                border: '2px solid #4ade80',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
          ],
          edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#4ade80', strokeWidth: 2 } },
            { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
            { id: 'e2-5', source: '2', target: '5', type: 'smoothstep', style: { stroke: '#8b5cf6', strokeWidth: 2 } },
            { id: 'e3-6', source: '3', target: '6', type: 'smoothstep', style: { stroke: '#4ade80', strokeWidth: 2 } },
          ],
        };

      default:
        return {
          nodes: [
            {
              id: '1',
              type: 'default',
              position: { x: 250, y: 0 },
              data: { 
                label: 'Vocational Stream',
                description: 'Skill-based practical education'
              },
              style: { 
                background: '#fef3c7', 
                color: '#92400e', 
                border: '2px solid #fbbf24',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '14px',
                fontWeight: 'bold'
              },
            },
            {
              id: '2',
              type: 'default',
              position: { x: 150, y: 120 },
              data: { 
                label: 'ITI/Diploma',
                description: 'Technical certification'
              },
              style: { 
                background: '#f0f9ff', 
                color: '#0c4a6e', 
                border: '2px solid #0ea5e9',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '3',
              type: 'default',
              position: { x: 350, y: 120 },
              data: { 
                label: 'Skill Training',
                description: 'Specialized skill development'
              },
              style: { 
                background: '#dcfce7', 
                color: '#166534', 
                border: '2px solid #4ade80',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '4',
              type: 'default',
              position: { x: 150, y: 240 },
              data: { 
                label: 'Technician',
                description: 'Technical support role'
              },
              style: { 
                background: '#f0f9ff', 
                color: '#0c4a6e', 
                border: '2px solid #0ea5e9',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
            {
              id: '5',
              type: 'default',
              position: { x: 350, y: 240 },
              data: { 
                label: 'Entrepreneur',
                description: 'Start your own business'
              },
              style: { 
                background: '#dcfce7', 
                color: '#166534', 
                border: '2px solid #4ade80',
                borderRadius: '15px',
                padding: '10px',
                fontSize: '12px'
              },
            },
          ],
          edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#0ea5e9', strokeWidth: 2 } },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: '#4ade80', strokeWidth: 2 } },
            { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', style: { stroke: '#0ea5e9', strokeWidth: 2 } },
            { id: 'e3-5', source: '3', target: '5', type: 'smoothstep', style: { stroke: '#4ade80', strokeWidth: 2 } },
          ],
        };
    }
  }, [stream]);

  const [nodes, setNodes, onNodesChange] = useNodesState(roadmapData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(roadmapData.edges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const nodeTypes = useMemo(() => ({}), []);

  return (
    <div className="w-full h-96 border-2 border-gray-200 rounded-xl bg-white shadow-lg">
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <h3 className="text-xl font-bold text-gray-800 text-center">
          Your Career Roadmap
        </h3>
        <p className="text-sm text-gray-600 text-center mt-1">
          Explore the journey from your stream to your dream career
        </p>
      </div>
      
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        className="react-flow-roadmap"
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#e5e7eb" />
        <Controls 
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}
        />
        <MiniMap 
          nodeColor={(node) => {
            const style = node.style as any;
            return style?.background || '#e5e7eb';
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}
        />
      </ReactFlow>
    </div>
  );
};

export default CareerRoadmap;