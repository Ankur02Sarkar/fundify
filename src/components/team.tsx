const teamData = {
    leadership: [
        {
            name: 'Michael Rodriguez',
            role: 'CTO',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        },
        {
            name: 'Emily Johnson',
            role: 'COO',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
        },
        {
            name: 'David Kim',
            role: 'CFO',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        },
    ],
    engineering: [
        {
            name: 'Ankur Sarkar',
            role: 'Full Stack Engineer',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
        },
        {
            name: 'Vimal Anand',
            role: 'Full Stack Engineer',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
        },
    ],
    marketing: [
        {
            name: 'Rachel Green',
            role: 'Head of Marketing',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
        },
        {
            name: 'Marcus Brown',
            role: 'Content Marketing Manager',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
        },
        {
            name: 'Sophie Davis',
            role: 'Social Media Specialist',
            avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
        },
        {
            name: 'Ryan Martinez',
            role: 'Growth Marketing Lead',
            avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
        },
    ],
}

const TeamMemberCard = ({ member }: { member: { name: string; role: string; avatar: string } }) => (
    <div>
        <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5 dark:shadow-zinc-950/20">
            <img 
                className="aspect-square rounded-full object-cover" 
                src={member.avatar} 
                alt={member.name} 
                height="80" 
                width="80" 
                loading="lazy" 
            />
        </div>
        <span className="mt-2 block text-sm font-medium text-foreground">{member.name}</span>
        <span className="text-muted-foreground block text-xs">{member.role}</span>
    </div>
)

const TeamSection = ({ title, members }: { title: string; members: Array<{ name: string; role: string; avatar: string }> }) => (
    <div className="mt-6 first:mt-0">
        <h3 className="mb-6 text-lg font-medium text-foreground">{title}</h3>
        <div className="grid grid-cols-2 gap-4 border-t border-border py-6 md:grid-cols-4">
            {members.map((member, index) => (
                <TeamMemberCard key={`${title}-${index}`} member={member} />
            ))}
        </div>
    </div>
)

export default function TeamComponent() {
    return (
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold text-foreground md:mb-16 lg:text-5xl">Our Team</h2>
                
                <TeamSection title="Leadership" members={teamData.leadership} />
                <TeamSection title="Engineering" members={teamData.engineering} />
                <TeamSection title="Marketing" members={teamData.marketing} />
            </div>
        </section>
    )
}
