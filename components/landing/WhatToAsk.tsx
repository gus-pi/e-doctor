'use client';

import { Canvas } from '@react-three/fiber';
import { MessageCircleIcon, MessageSquareIcon } from 'lucide-react';
import { DoctorTalk } from '../3D/DoctorTalk';
import { useRef } from 'react';
import * as THREE from 'three';
import { Environment } from '@react-three/drei';

function WhatToAsk() {
    const mainGroup = useRef<THREE.Group>(null!);
    return (
        <section
            className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20"
            id="what-to-ask"
        >
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
                        <MessageCircleIcon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            AI-Powered Conversations
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Ask any
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            medical enquiry
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        From simple questions to complex concerns, our AI delivers expert-level
                        guidance trained on thousands of real medical cases
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                    {/* Left Side - Interactive Chat Examples */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold mb-8">
                                Common questions our AI answers:
                            </h3>

                            {/* Chat Bubble 1 */}
                            <div className="group relative">
                                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <MessageSquareIcon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="space-y-3 flex-1">
                                            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                                                <p className="font-semibold text-primary">
                                                    "I've had back pain for years. Do I have to
                                                    learn to live with it?"
                                                </p>
                                            </div>
                                            <div className="bg-muted/30 rounded-2xl p-4">
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Get immediate advice on pain management,
                                                    possible causes, and when to see a doctor
                                                    urgently
                                                </p>
                                                <div className="flex gap-2 mt-3">
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Instant Response
                                                    </span>
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Pain Relief
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Bubble 2 */}
                            <div className="group relative">
                                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <MessageSquareIcon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="space-y-3 flex-1">
                                            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                                                <p className="font-semibold text-primary">
                                                    "How much should I budget for a physical therapy
                                                    session?"
                                                </p>
                                            </div>
                                            <div className="bg-muted/30 rounded-2xl p-4">
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Compare treatment options, pricing ranges, and
                                                    find the best solution for your budget
                                                </p>
                                                <div className="flex gap-2 mt-3">
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Cost Analysis
                                                    </span>
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Treatment Options
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Bubble 3 */}
                            <div className="group relative">
                                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <MessageSquareIcon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="space-y-3 flex-1">
                                            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                                                <p className="font-semibold text-primary">
                                                    "When should I get a Comprehensive Metabolic
                                                    Panel (CMP)?"
                                                </p>
                                            </div>
                                            <div className="bg-muted/30 rounded-2xl p-4">
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Learn about tracking your metabolic health
                                                    through annual screenings, or more frequent
                                                    testing if you are managing conditions like
                                                    hypertension, diabetes, or kidney disease.
                                                </p>
                                                <div className="flex gap-2 mt-3">
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Preventive Screenings
                                                    </span>
                                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                        Chronic Disease Monitoring
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - AI Illustration */}
                    <div
                        className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500  h-full 
                    "
                    >
                        <div className="h-full min-h-[420px] lg:min-h-0">
                            <Canvas
                                className="h-full w-full"
                                camera={{ position: [0, 0, 5], fov: 35, near: 0.1, far: 50 }}
                            >
                                <group
                                    ref={mainGroup}
                                    position={[0, -1, 0]}
                                    scale={1.3}
                                    rotation={[0, Math.PI / 3, 0]}
                                >
                                    <DoctorTalk />
                                    {/* <pointLight position={[0, 3, 0]} /> */}
                                    <Environment
                                        preset="apartment"
                                        environmentIntensity={1}
                                        environmentRotation={[-Math.PI / 2, 0, 0]}
                                    />
                                </group>
                            </Canvas>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default WhatToAsk;
