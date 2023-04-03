import React from 'react';
import Link from 'next/link';

export interface UiCardProps {
  title: string;
  description: string;
  url: string;
  classname?: string;
}

export function UiCard(props: UiCardProps) {
  return (
    <div className={`card bg-base-100 shadow-lg ${props.classname}`}>
      <div className="card-body w-96 h-72">
        <h2 className="card-title">{props.title}</h2>
        <p className="text-ellipsis">{props.description}</p>
        <div className="card-actions justify-end">
          <Link href={props.url}>
            <a className="btn btn-primary">View</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UiCard;
