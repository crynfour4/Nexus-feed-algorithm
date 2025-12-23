import React from "react"

interface FeatureCardProps {
    feature: {
        icon: React.ReactElement<{ className: string }>,
        heading: string,
        description: string
    }
}

const FeatureCard: React.FC<FeatureCardProps> = ({feature}) => {
    const stylesIcon = React.cloneElement(feature.icon, {
        className: 'text-indigo-700 size-8'
    })

  return (
    <div className="flex flex-col items-start bg-zinc-900 rounded-xl border border-zinc-800 w-82.5 p-7 gap-2 transition duration-300 ease-in-out hover:scale-103" key={feature.heading}>
      <span className="p-2.5 bg-indigo-950/50 rounded-xl mb-2">
        {stylesIcon}
      </span>
      <p className="text-white font-semibold text-xl">{feature.heading}</p>
      <p className="text-zinc-400">{feature.description}</p>
    </div>
  )
}

export default FeatureCard
