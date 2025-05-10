'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export default function Contributions() {
  const { contributions } = useParams();

  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/api/markdown?file=${contributions}`);
        if (!response.ok) {
          throw new Error('Failed to fetch markdown content');
        }
        const data = await response.json();
        setMarkdown(data);
      } catch (err) {
        setError('Failed to load content');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (contributions) {
      fetchMarkdown();
    }
  }, [contributions]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f3f4f6] dark:bg-secondary">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f3f4f6] dark:bg-secondary">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-red-500">{error}</h2>
          <Link href="/contributions" className="text-primary hover:underline">
            Return to contributions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] px-3 py-10 lg:px-[8%] dark:bg-secondary dark:text-white">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <Markdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus as any}
                  language={match[1]}
                  PreTag="div"
                  {...(rest as any)}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...rest}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </div>
  );
}
