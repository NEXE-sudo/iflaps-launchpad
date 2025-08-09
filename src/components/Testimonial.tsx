import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">
                        Trusted by Learners Worldwide
                    </h2>
                    <p>
                        Students from across the globe have achieved their study and career goals
                        with iFLAPS Education. Hear what our learners have to say about their
                        experience.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <img
                                className="h-13 w-fit"
                                src="/logos/cambridge.svg"
                                alt="Cambridge Logo"
                                height="24"
                                width="auto"
                            />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">
                                    iFLAPS gave me the structure and confidence I needed for the IELTS exam.
                                    The practice materials were spot-on, and the mock tests felt just like the real thing.
                                    I scored Band 8.0 and secured admission to my dream university!
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/students/ananya.webp"
                                            alt="Ananya Sharma"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>AS</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Ananya Sharma</cite>
                                        <span className="text-muted-foreground block text-sm">
                                            IELTS Student, India
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">
                                    I was nervous about the TOEFL speaking section, but iFLAPS’ personalised
                                    feedback and live classes made all the difference. I now work at an international company in Germany.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/students/james.webp"
                                            alt="James Lee"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>JL</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">James Lee</cite>
                                        <span className="text-muted-foreground block text-sm">
                                            TOEFL Student, South Korea
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>
                                    I prepared for the Duolingo English Test in just 4 weeks with iFLAPS.
                                    The adaptive practice tests were incredibly accurate. Got accepted to a Canadian university!
                                </p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/students/maria.webp"
                                            alt="Maria Gonzalez"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>MG</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Maria Gonzalez</cite>
                                        <span className="text-muted-foreground block text-sm">
                                            DET Student, Mexico
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>
                                    The French DELF B2 preparation course was very comprehensive.
                                    I passed with flying colours and now work as a translator in Paris.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="/students/pierre.webp"
                                            alt="Pierre Dubois"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>PD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Pierre Dubois</p>
                                        <span className="text-muted-foreground block text-sm">
                                            DELF Student, France
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
