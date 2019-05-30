import {sequence, trigger, stagger, animate, style, group, query, transition, keyframes, animateChild} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    group([
      query(':leave', [
        animateChild(),
        style({ transform: 'translateX(0%)' }),
        animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms 500ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(0%)' })),
        animateChild()
      ], { optional: true }),
    ])
  ]),
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    group([
      query(':leave', [
        animateChild(),
        style({ transform: 'translateX(0%)' }),
        animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms 1600ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(0%)' })),
        animateChild()
      ], { optional: true }),
    ])
  ])
]);
