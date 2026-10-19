import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2';

function Steps({arr}) {
  return (
		<div className="pointer-events-none gap-4.5 flex items-center justify-between border border-border bg-surface/85 px-5 py-3 shadow-card backdrop-blur w-fit">
			{arr?.map((label, index) => (
				<React.Fragment key={label}>
					{index > 0 && (
						<span className="text-brand-gold" aria-hidden="true">
							<HiArrowLongRight />
						</span>
					)}
					<span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground-secondary">
						{label}
					</span>
				</React.Fragment>
			))}
		</div>
  );
}

export default Steps