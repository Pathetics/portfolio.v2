import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from '~/assets/volkihar-banner.jpg';
import volkiharBookLarge from '~/assets/volkihar-book-large.png';
import volkiharBookPlaceholder from '~/assets/volkihar-book-placeholder.png';
import volkiharBook from '~/assets/volkihar-book.png';
import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import volkiharEnderalLogoLarge from '~/assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from '~/assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from '~/assets/volkihar-enderal-logo.png';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from '~/assets/volkihar-enderal.jpg';
import volkiharSlide1Large from '~/assets/volkihar-slide-1-large.jpg';
import volkiharSlide1 from '~/assets/volkihar-slide-1.jpg';
import volkiharSlide2Large from '~/assets/volkihar-slide-2-large.jpg';
import volkiharSlide2 from '~/assets/volkihar-slide-2.jpg';
import volkiharSlide3Large from '~/assets/volkihar-slide-3-large.jpg';
import volkiharSlide3 from '~/assets/volkihar-slide-3.jpg';
import volkiharSlidePlaceholder from '~/assets/volkihar-slide-placeholder.jpg';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { VolkiharLogo } from './volkihar-logo';
import styles from './volkihar-knight.module.css';
import "./style.css"
import React from 'react'

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

const title = 'Identity';
const description =
  'A lore-friendly armor mod for The Elder Scrolls V: Skyrim. Released on PC and Xbox One with over one million downloads across both platforms.';
const roles = ['3D Modelling', 'Texturing', 'Graphic Design'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function VolkiharKnight() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackground} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
        />
        
      
        <ProjectSection>
          <ProjectSectionColumns>
            <div>
              <ProjectSectionHeading>Language Proficiency</ProjectSectionHeading>
              <div class="skill">
                <li>PYTHON
                    <span class="bar"><span class="python"></span></span>
                  </li>
                  <li>JAVA
                    <span class="bar"><span class="java"></span></span>
                  </li>
                  <li>C#
                    <span class="bar"><span class="csharp"></span></span>
                  </li>
                  <li>C
                    <span class="bar"><span class="c"></span></span>
                  </li>
                  <li>HTML
                    <span class="bar"><span class="html"></span></span>
                  </li>
                  <li>CSS
                    <span class="bar"><span class="css"></span></span>
                  </li>
                  <li>JAVASCRIPT
                    <span class="bar"><span class="javascript"></span></span>
                  </li>
                  <li>PHP
                    <span class="bar"><span class="php"></span></span>
                  </li>

              </div>
            </div>
            <div className={styles.textSection}>
            <div>
              <ProjectSectionHeading>Software Fluency</ProjectSectionHeading>
              <div class="skill">
                <li>Unity
                    <span class="bar"><span class="unity"></span></span>
                  </li>
                  <li>Unreal Engine
                    <span class="bar"><span class="unreal"></span></span>
                  </li>
                  <li>Cinema 4D
                    <span class="bar"><span class="c4d"></span></span>
                  </li>
                  <li>Cisco Packet Tracer
                    <span class="bar"><span class="cisco"></span></span>
                  </li>
                  <li>Adobe Photoshop
                    <span class="bar"><span class="photoshop"></span></span>
                  </li>
                  <li>Adobe Lightroom
                    <span class="bar"><span class="lightroom"></span></span>
                  </li>
                  <li>Adobe Illustrator
                    <span class="bar"><span class="illustrator"></span></span>
                  </li>
                  <li>Android Studio
                    <span class="bar"><span class="adb"></span></span>
                  </li>

              </div>
            </div>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${volkiharEnderal} 1280w, ${volkiharEnderal} 1920w`}
              width={1280}
              height={720}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <section class="education">
                <ProjectSectionHeading>Education</ProjectSectionHeading>
                <div class="education-item">
                  <div>
                    <ProjectSectionText>
                      Bachelor of Science
                    </ProjectSectionText>
                    <h5>Southeast University (2022-Ongoing)</h5>
                    <li>Department: Computer Science and Engineering</li>
                  </div>
                </div>
                <div class="education-item">
                  <div>
                    <ProjectSectionText>
                      Diploma in Computer Engineering
                    </ProjectSectionText>
                    <h5>Dhaka Polytechnic Institute (2017-2021)</h5>
                    <li>CGPA: 4.87</li>
                  </div>
                </div>
                <div class="education-item">
                  <div>
                    <ProjectSectionText>
                      Secondary School Certificate
                    </ProjectSectionText>
                    <h5>Rayhan School And College, Dhaka (2017)</h5>
                    
                    <li>Section: Science</li>
                    <li>CGPA: 4.87</li>
                  </div>
                </div>
              </section>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <section class="education">
                <ProjectSectionHeading>Experience</ProjectSectionHeading>
                <div class="education-item">
                  <div>
                    <ProjectSectionText>
                      Freelancer
                    </ProjectSectionText>
                    <p>Private Clients (2022-Ongoing)</p>
                  </div>
                </div>
                <div class="education-item">
                  <div>
                    <ProjectSectionText>
                      Network Engineer (Intern)
                    </ProjectSectionText>
                      <p>IT Bangladesh | November 2021 - March 2022</p>
                  </div>
                </div>
                <div class="education-item">
                  <div>
                    <ProjectSectionText>
                      Junior Game Developer (Intern)
                    </ProjectSectionText>
                    <p>GameXltd | July 2022 - December 2022</p>
                  </div>
                </div>
              </section>
            </ProjectSectionContent>
          </ProjectSectionColumns>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href=""
              >
                Download CV
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
