import { useState, useRef } from "react";
import "./BanhChungFestival.css";

export default function FestivalContent() {
        const [showVideoModal, setShowVideoModal] = useState(false);
        const videoRef = useRef(null);

        const openVideoModal = () => {
                setShowVideoModal(true);
                setTimeout(() => {
                        if (videoRef.current) {
                                videoRef.current.play();
                        }
                }, 100);
        };

        const closeVideoModal = () => {
                if (videoRef.current) {
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                }
                setShowVideoModal(false);
        };

        return (
            <div className="story-layout">

                    {/* HERO */}
                    <section className="hero-section">
                            <div className="hero-overlay">
                                    <h1>BANH CHUNG FESTIVAL</h1>
                                    <p>Marie Curie School – Lunar New Year Tradition</p>
                            </div>
                    </section>

                    {/* INTRO */}
                    <section className="text-section">
                            <p>
                                    The Banh Chung Festival at Marie Curie School (Hanoi) has long been more than just an extracurricular activity; it is a cultural "specialty" and a symbol associated with the school's identity every Lunar New Year (Tet).
                            </p>

                            <p>
                                    Here is the detailed information about this unique festival, updated for the 2026 context:
                            </p>
                    </section>

                    {/* IMAGE BREAK */}
                    <section className="image-break img-1"></section>

                    {/* SECTION 1 */}
                <section className="text-section">
                    <h2>1. Meaning and Origin</h2>
                    <p>At Marie Curie School (Hanoi), the Banh Chung Festival has become more than just an extracurricular activity over the years. It is now a cultural “specialty” that brings the traditional Tet atmosphere to students and helps preserve Vietnamese identity through hands-on experiences. More importantly, the festival has grown into a symbol closely linked to the school’s unique spirit and identity every Lunar New Year. Therefore, it is not only an annual event but also a meaningful tradition and “brand” of Marie Curie.</p>
                    <p>The festival was initiated by the School Principal, Mr. Nguyen Xuan Khang (affectionately called
                        "Grandpa" by students). The primary goals are:</p>
                    <p>
                        <strong>1.1 Preserving and Educating Cultural Traditions</strong><br/>
                        Traditional Values: The festival helps younger generations understand the origins of Banh Chung
                        and the concept of "Square Earth and Round Sky."<br/>
                        Hands-on Experience: Participants learn the art of wrapping cakes, fostering a sense of
                        connection with Vietnamese roots and national identity.
                    </p>


                    <p>
                        <strong>1.2 Spiritual Meaning and New Year Wishes</strong><br/>
                        Gratitude to Ancestors: The best cakes are offered to ancestors to express respect and
                        remembrance.<br/>
                        Prayers for Prosperity: The green Banh Chung symbolizes the wish for a "favorable weather,
                        abundant harvests, and prosperity in the new year."
                    </p>

                    <p>
                        <strong>1.3 Strengthening Solidarity and Teamwork</strong><br/>
                        Team Bonding: The process of making Banh Chung requires smooth coordination and task
                        allocation—people washing leaves, preparing the sticky rice, wrapping the cakes, and tending the
                        fire. This provides an excellent opportunity for students or community members to practice
                        teamwork skills and foster mutual understanding.<br/>
                        Social Connection: The festival bridges the gap between teachers and students, tourists and
                        locals, creating a warm, friendly, and cohesive environment for interaction.
                    </p>

                    <p>
                        <strong>1.4 Sustainable Lifestyle and Agriculture Awareness</strong><br/>
                        Respect for Nature: By using natural ingredients like dong leaves, bamboo strings, sticky rice,
                        and mung beans, the festival reminds everyone of the value of local produce and the importance
                        of environmental protection.<br/>
                        Honoring Farmers: This is an occasion to honor the hard work of farmers who produce rice—the
                        "pearl of the earth"—thereby educating a sense of saving and appreciating food in the modern
                        context of sustainable development and responsible consumption.
                    </p>
                </section>

                {/* IMAGE BREAK */}
                <section className="image-break img-2"></section>

                {/* SECTION 2 */}
                <section className="text-section">
                    <h2>2. Scale and Location</h2>
                    <p>
                        The festival takes place simultaneously across all campuses (My Dinh, Van Phu, Kien Hung, etc.).
                        With thousands of students participating, the scale is massive, involving:
                    </p>
                    <p>Tons of high-quality sticky rice, mung beans, and pork.</p>
                    <p>Tens of thousands of carefully selected "Dong" leaves.</p>
                    <p>Hundreds of wood-fired stoves burning throughout the night on school grounds.</p>
                    <p>In recent days, the students has been excited to take part in the hands-on experience of making bánh chưng. During the activity, students are carefully guided by teachers through each step to complete both large and small bánh chưng. Everyone participates enthusiastically and eagerly prepares themselves for a memorable Bánh Chưng Festival 2026.</p>
                    <p>Before starting the practical session, students are introduced to the theoretical knowledge by their teachers, from folding and cutting dong leaves to tying the strings firmly and neatly. The most lively moments come when the whole class joins in the hands-on practice. Each class is divided into smaller groups, and teachers carefully prepare all the necessary molds and ingredients for every group to practice wrapping bánh chưng.</p>
                </section>

                {/* IMAGE BREAK */}
                <section className="image-break img-3"></section>

                {/* SECTION 3 */}
                <section className="text-section">
                    <h2>3. Key Activities</h2>
                    <p>The festival typically spans 2 days and 1 night with a vibrant schedule:</p>
                    <p><strong>Wrapping Competition:</strong> Classes compete to see who can wrap the neatest and
                        fastest cakes. "MCers" (Marie Curie students) from elementary to high school participate with
                        great excitement. For many, it is their first time touching traditional bamboo ties and leaves.
                    </p>
                    <p><strong>Overnight Vigil (The Highlight):</strong> This is the "exclusive" experience at Marie
                        Curie. Students are allowed to stay overnight at school. Sitting around the boiling pots of Banh
                        Chung, teachers and students sing, dance, tell stories, and enjoy BBQ. This night creates
                        unforgettable memories of student life.</p>
                    <p><strong>Cultural Side Events:</strong> Alongside cake wrapping, there are stalls for handmade goods, folk games (tug-of-war, bamboo dancing...), and energetic musical performances by school clubs.</p>
                            <p><strong>Featured Event:</strong> The tug-of-war competition at Marie Curie School is always one of the most exciting and anticipated activities. More than just a test of physical strength, it highlights teamwork, coordination, and a never-give-up spirit. The enthusiastic cheers, intense moments of struggle, and the burst of joy at victory create a lively atmosphere and strengthen the bond among students across the school.</p>
                    </section>

                    {/* IMAGE BREAK */}
                    <section className="image-break img-4"></section>

                    {/* SECTION 4 & 5 */}
                <section className="text-section">
                    <h2>4. Banh Chung Festival 2026 (Year of the Horse)</h2>
                    <p>As of January 2026, the preparations for the Tet Binh Ngo festival are in full swing:</p>
                    <p><strong>Timing:</strong> The festival is usually held during the final school week before the Lunar New Year holiday.</p>
                </section>

                {/* SECTION 5 */}
                <section className="image-break img-5"></section>
                <section className="text-section alt-bg">
                    <h2>5. How to Follow the Event</h2>
                    <p>To see live photos, highlight clips, or official schedules for each campus, you can visit:</p>
                    <p><strong>Official Website:</strong> mariecuriehanoischool.com</p>
                    <p><strong>Facebook Fanpage:</strong> Marie Curie Hanoi School(The most frequent source for live updates and photos).</p>
                    <p><strong>YouTube:</strong> The Marie Curie Hanoi channel often posts touching documentary footage of the overnight vigils.</p>
                    <p>If you are a new parent or student, remember to bring warm clothes and a high-energy spirit to fully enjoy this unique cultural tradition at Marie Curie!</p>
                </section>

                {/* VIDEO SECTION */}
                <section className="video-section">
                    <h2 className="video-section-title">Watch Our Festival</h2>
                    <p className="video-section-desc">Experience the vibrant atmosphere of the Banh Chung Festival</p>
                    <button className="video-btn" onClick={openVideoModal}>
                        Visit our video
                    </button>
                </section>

                {/* VIDEO MODAL */}
                {showVideoModal && (
                    <div className="video-modal-overlay" onClick={closeVideoModal}>
                        <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="video-modal-close" onClick={closeVideoModal}>
                                ❌
                            </button>
                            <video
                                ref={videoRef}
                                controls
                                autoPlay
                                className="video-player"
                            >
                                <source src="https://pub-74ae98a19e2e46a6b346406a20981968.r2.dev/B%C3%A1nh%20ch%C6%B0ng%20festival.mov" type="video/quicktime" />
                                <source src="https://pub-74ae98a19e2e46a6b346406a20981968.r2.dev/B%C3%A1nh%20ch%C6%B0ng%20festival.mov" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}

            </div>
        );
}
