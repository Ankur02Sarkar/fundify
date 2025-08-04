'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { CheckCircleIcon, StarIcon, TrendingUpIcon } from 'lucide-react';
import Link from 'next/link';
import { motion, type Transition } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n';

type FREQUENCY = 'monthly' | 'yearly';
const frequencies: FREQUENCY[] = ['monthly', 'yearly'];

interface Plan {
	name: string;
	info: string;
	price: {
		monthly: number;
		yearly: number;
	};
	features: {
		text: string;
		tooltip?: string;
	}[];
	btn: {
		text: string;
		href: string;
	};
	highlighted?: boolean;
}

interface PricingSectionProps extends React.ComponentProps<'div'> {
	plans: Plan[];
	heading: string;
	description?: string;
}

export function PricingSection({
	plans,
	heading,
	description,
	...props
}: PricingSectionProps) {
	const { t } = useTranslation();
	const [frequency, setFrequency] = React.useState<'monthly' | 'yearly'>(
		'monthly',
	);

	useEffect(() => {
		i18n.loadNamespaces('translation');
	}, []);

	return (
		<div
			className={cn(
				'flex w-full flex-col items-center justify-center space-y-5 p-4',
				props.className,
			)}
			{...props}
		>
			<motion.div 
				className="mx-auto max-w-xl space-y-2"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 bg-clip-text text-transparent">
					{heading}
				</h2>
				{description && (
					<p className="text-muted-foreground text-center text-sm md:text-base">
						{description}
					</p>
				)}
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<PricingFrequencyToggle
					frequency={frequency}
					setFrequency={setFrequency}
				/>
			</motion.div>
			<motion.div 
				className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-3"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.4 }}
			>
				{plans.map((plan, index) => (
					<motion.div
						key={plan.name}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
					>
						<PricingCard plan={plan} frequency={frequency} />
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

type PricingFrequencyToggleProps = React.ComponentProps<'div'> & {
	frequency: FREQUENCY;
	setFrequency: React.Dispatch<React.SetStateAction<FREQUENCY>>;
};

export function PricingFrequencyToggle({
	frequency,
	setFrequency,
	...props
}: PricingFrequencyToggleProps) {
	const { t } = useTranslation();

	return (
			<div
				className={cn(
				'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 mx-auto flex w-fit rounded-full border border-blue-200 dark:border-blue-800 p-1 shadow-lg',
				props.className,
			)}
				{...props}
			>
				{frequencies.map((freq) => (
					<motion.button
						key={freq}
						onClick={() => setFrequency(freq)}
						className="relative px-6 py-2 text-sm font-medium capitalize transition-colors"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<span className={cn(frequency === freq && 'text-white', "relative z-10")}>{t(`pricingComponent.${freq}`)}</span>
						{frequency === freq && (
							<motion.span
								layoutId="frequency"
								transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
								className="bg-gradient-to-r from-blue-600 to-blue-500 absolute inset-0 z-0 rounded-full shadow-md"
							/>
						)}
					</motion.button>
				))}
			</div>
		);
}

type PricingCardProps = React.ComponentProps<'div'> & {
	plan: Plan;
	frequency?: FREQUENCY;
};

export function PricingCard({
	plan,
	className,
	frequency = frequencies[0],
	...props
}: PricingCardProps) {
	const { t } = useTranslation();
	// Extract only safe props for motion.div
	const { 
			onAnimationStart, onAnimationEnd, onAnimationIteration,
			onDrag, onDragEnd, onDragStart, onDrop,
			onMouseDown, onMouseUp, onMouseMove,
			onTouchStart, onTouchEnd, onTouchMove,
			...safeProps 
		} = props;
	
	return (
		<motion.div
			key={plan.name}
			className={cn(
					'relative flex w-full flex-col rounded-xl border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-white to-blue-50 dark:from-blue-950 dark:to-slate-950 shadow-lg hover:shadow-xl transition-all duration-300',
					plan.highlighted && 'border-blue-300 dark:border-blue-700 shadow-blue-100 dark:shadow-blue-900/20 ring-2 ring-blue-200 dark:ring-blue-800',
					className,
				)}
			whileHover={{ y: -5, scale: 1.02 }}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}
			style={safeProps.style}
			id={safeProps.id}
		>
			{plan.highlighted && (
				<BorderTrail
					style={{
						boxShadow:
							'0px 0px 60px 30px rgb(59 130 246 / 15%), 0 0 100px 60px rgb(245 158 11 / 10%)',
					}}
					size={100}
				/>
			)}
			<div
				className={cn(
				'bg-gradient-to-r from-blue-50 to-white dark:from-blue-900 dark:to-slate-900 rounded-t-xl border-b border-blue-200 dark:border-blue-700 p-6',
				plan.highlighted && 'pt-12 from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-blue-200 dark:border-blue-800',
			)}
			>
				<div className="absolute top-3 right-3 z-10 flex items-center gap-2">
					{plan.highlighted && (
						<motion.div 
							className="bg-gradient-to-r from-blue-600 to-blue-500 text-white flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium shadow-lg"
							initial={{ scale: 0, rotate: -10 }}
							animate={{ scale: 1, rotate: 0 }}
							transition={{ type: 'spring', delay: 0.5 }}
						>
							<StarIcon className="h-3 w-3 fill-current" />
						{t('pricingComponent.mostPopular')}
						</motion.div>
					)}
					{frequency === 'yearly' && plan.name !== 'Free' && (
						<motion.div 
							className="bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium shadow-lg"
							initial={{ scale: 0, x: 20 }}
							animate={{ scale: 1, x: 0 }}
							transition={{ type: 'spring', delay: 0.7 }}
						>
							<TrendingUpIcon className="h-3 w-3" />
							{Math.round(
								((plan.price.monthly * 12 - plan.price.yearly) /
									plan.price.monthly /
									12) *
									100,
						)}
						{t('pricingComponent.off')}
						</motion.div>
					)}
				</div>

				<div className="text-xl font-bold text-slate-900 dark:text-slate-100">{plan.name}</div>
				<p className="text-slate-600 dark:text-slate-400 text-sm font-medium mt-1">{plan.info}</p>
				<motion.h3 
					className="mt-4 flex items-end gap-1"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					<span className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-100 dark:to-blue-300 bg-clip-text text-transparent">
						${plan.price[frequency]}
					</span>
					<span className="text-blue-600 dark:text-blue-400 text-sm mb-1">
					{plan.name !== 'Free'
						? '/' + (frequency === 'monthly' ? t('pricingComponent.month') : t('pricingComponent.year'))
						: ''}
				</span>
				</motion.h3>
			</div>
			<div
				className={cn(
				'space-y-4 px-6 py-6 text-sm',
				plan.highlighted && 'bg-gradient-to-b from-blue-50/50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/20',
			)}
			>
				{plan.features.map((feature, index) => (
					<motion.div 
						key={index} 
						className="flex items-center gap-3"
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 + index * 0.1 }}
					>
						<CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
						<TooltipProvider>
							<Tooltip delayDuration={0}>
								<TooltipTrigger asChild>
									<p
										className={cn(
											'text-blue-900 dark:text-blue-100 font-medium',
											feature.tooltip &&
												'cursor-pointer border-b border-dashed border-blue-400',
										)}
									>
										{feature.text}
									</p>
								</TooltipTrigger>
								{feature.tooltip && (
									<TooltipContent>
										<p>{feature.tooltip}</p>
									</TooltipContent>
								)}
							</Tooltip>
						</TooltipProvider>
					</motion.div>
				))}
			</div>
			<div
				className={cn(
				'mt-auto w-full border-t border-blue-200 dark:border-blue-700 p-6',
				plan.highlighted && 'bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/20',
			)}
			>
				<motion.div
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					<Button
						className={cn(
						'w-full font-semibold transition-all duration-200',
						plan.highlighted 
							? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl'
							: 'border-2 border-blue-300 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-500 text-blue-700 dark:text-blue-300'
					)}
						variant={plan.highlighted ? 'default' : 'outline'}
						asChild
					>
						<Link href={plan.btn.href}>{plan.btn.text}</Link>
					</Button>
				</motion.div>
			</div>
		</motion.div>
	);
}


type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION: Transition = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear',
  };

  return (
    <div className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'>
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}
