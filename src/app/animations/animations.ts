// animations.ts
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const listStagger = trigger('listStagger', [
    transition('* <=> *', [
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateY(-15px)' }),
                stagger(
                    '50ms',
                    animate(
                        '550ms ease-out',
                        style({ opacity: 1, transform: 'translateY(0px)' })
                    )
                )
            ],
            { optional: true }
        ),
        query(':leave', animate('500ms', style({ opacity: 0 })), {
            optional: true
        })
    ])
]);